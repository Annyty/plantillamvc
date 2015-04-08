(function (simverApp) {

    function ModeloDatos(data) {
        var self = this;
        self.ambito = {};        
        self.modelo = new simverApp.EstadoFinanciero(data, self);
        self.ambito.cargarImagen = function (data, event) {            
            if (vm.hasFileToUpload()) {
                
                if (vm.validarTamanioArchivos()) {
                    if (vm.validarExtensionTipoArchivos()) {
                        vm.uploadFile().done(function (result) {

                            console.log(result);
                            if (result.status === 'error') {
                                vm.showFileError(result);
                            }
                            else {
                                self.modelo.nombreArchivo(result.nombreArchivo);
                                toastr.success("Archivo adjuntado exitosamente");
                                vm.hideFileUpload();
                                funMunDataService.asignarArchivoRequerido(false);
                                $("#divArchivo").html("");
                                $("#botonAdjuntar").html("");
                            }
                        }).fail(function (error) {
                            vm.showFileError();
                        });
                    }
                    else {
                        toastr.warning("El tipo de archivo es inválido");
                    }
                }
                else {
                    toastr.warning("El tamaño del archivo no es válido");
                }
            }            
        };
    }

    funMunDataService.asignarUrl('api/EstadoFinancieroAPI/');
    funMunDataService.asignarUrlServicioArchivo('EstadoFinanciero/CargarArchivo');
    funMunDataService.asignarTamanioArchivo(20);
    funMunDataService.asignarArchivoRequerido(simverApp.data.esNuevo);
    funMunDataService.asignarExtensionesValidas('xls', 'xlsx', 'zip', 'rar', 'pdf', 'doc', 'docx');

    simverApp.ModeloDatos = new ModeloDatos(simverApp.data);

    simverApp.Inicializacion = function () {

        var htmlDataForm = $('#html-data-form')[0];

        H5F.setup([htmlDataForm], {

            validClass: "valid",
            invalidClass: "invalid",
            requiredClass: "required"

        });    
    };
}(window.simverApp));