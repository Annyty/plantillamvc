(function (simverApp) {

    function ModeloDatos(data,padre) {

        var self = this;
        self.ambito = {};
        self.modelo = {};        
        //self.modelo = ko.utils.arrayMap(data.modelo, function (data) {
        //    return new simverApp.AperturaProgramatica(data);
        //});
        self.modelo = data.modelo;
        self.ambito.estructuraApertura = {
            id: ko.observable(),
            clave: ko.observable(),
            conceptoApertura: ko.observable()
        };
        self.ambito.unidadesProyecto = ko.observableArray(data.unidadesProyecto);
        self.ambito.beneficiarios = ko.observableArray(data.beneficiarios);
        self.ambito.clasificacionesProyecto = ko.observableArray(data.clasificacionesProyecto);
        self.ambito.subclasificacionesProyecto = ko.observableArray(data.subclasificacionesProyecto);
        self.ambito.modalidadesProyecto = ko.observableArray(data.modalidadesProyecto);
        self.ambito.contribucionesProyecto = ko.observableArray(data.contribucionesProyecto);
        self.ambito.tiposContribucionProyecto = ko.observableArray(data.tiposContribucionProyecto);
        self.ambito.tiposProyecto = ko.observableArray(data.tiposProyecto);
        
    }

    //funMunDataService.asignarUrl('api/TechoFinancieroAPI/');
    //funMunDataService.asignarUrlServicioArchivo('TechoFinanciero/CargarArchivo');
    //funMunDataService.asignarTamanioArchivo(3);
    //funMunDataService.asignarArchivoRequerido(false);
    //funMunDataService.asignarExtensionesValidas('image/*', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

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