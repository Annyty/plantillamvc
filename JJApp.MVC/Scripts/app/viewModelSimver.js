(function (simverApp) {
    
    $(document).ajaxStart(function () {
        $('#ajaxCargador').fadeIn('fast');
    }).ajaxStop(function () {
        $('#ajaxCargador').fadeOut('fast');
    });

    var
            htmlDataForm = $('#html-data-form')[0],
            progressBar = $('#progress-bar');

    var ViewModel = function (_modeloDatos) {

        this.modelo = _modeloDatos.modelo;        
        this.ambito = _modeloDatos.ambito;
        this.errorMessage = ko.observable();
        this.hideProgressBar = function (showAfterHideFunc) {

            progressBar.fadeOut(function () {
                showAfterHideFunc();
            });
        };
        this.mostrarMensajeError = function (error) {
            toastr.options = { "closeButton": true, "debug": false, "positionClass": "toast-top-full-width", "onclick": null, "showDuration": "300", "hideDuration": "1000", "timeOut": "5000", "extendedTimeOut": "1000", "showEasing": "swing", "hideEasing": "linear", "showMethod": "fadeIn", "hideMethod": "fadeOut" }
            toastr.error(error, "Advertencia");
        };

        this.showError = function (error) {

            var resetUI = function () {
                $('#command-buttons').fadeIn();
                $('#fail-msg-container').fadeIn();
            };

            vm.hideProgressBar(resetUI);

            if (error.statusText) {
                vm.errorMessage(error.statusText);
            }

            if (error.responseText) {
                var
                    msg = JSON.parse(error.responseText),
                    keys = _.keys(msg),
                    txt = '';

                _.each(keys, function (key) {

                    txt += msg[key] + ' ';

                });

                vm.errorMessage(txt);
            }


        };


        this.showFileUpload = function () {
            $('#upload-button').hide();
            $('#upload-form-container').removeClass('none');
        };


        this.hideFileUpload = function () {

            $('#upload-button').show();
            $('#upload-form-container').addClass('none');

        };

        this.showFileError = function (error) {
            $('#img-fail-msg-container').fadeIn();
            vm.errorMessage(error.statusText);
        };


        this.showSuccess = function () {

            var resetUI = function () {

                $('#command-buttons').fadeIn();
                $('#fail-msg-container').fadeOut();
                $('#delete-msg-container').fadeOut();
                //$('#success-msg-container').fadeIn();
                $('#success-confirm').modal();

            };

            vm.hideProgressBar(resetUI());

            var fadeOut = function () {

                $('#success-msg-container').fadeOut();

            };

            _.delay(fadeOut, 5000);

        };

        this.showDelete = function () {

            $('#fail-msg-container').fadeOut();
            $('#delete-msg-container').fadeIn();
            $('.cmd').each(function (i, element) {
                $(element).prop('disabled', true).addClass('muted');
            });

        };


        this.uploadFile = function () {

            if (window.FormData !== undefined) {

                var
                    data = new FormData(),file;


                var numeroArchivos = $("input[type=file]").length;                
                if (numeroArchivos == 1) {
                    file = $('#file-upload')[0].files[0];
                    data.append('archivo', file);
                }
                else {

                    if (numeroArchivos > 1) {                        
                        $.each($("input[type=file]"), function (i, obj) {
                            $.each(obj.files, function (j, file) {
                                data.append('archivos[' + i + ']', file);                                
                            })
                        });
                    }
                }                
                data.append('id', vm.modelo.id());                
                return funMunDataService.saveFile(data);

            }
        };

        this.hasFileToUpload = function () {
            var archivosConDatos = 0;
            $.each($("input[type=file]"), function (i, obj) {
                $.each(obj.files, function (j, file) {
                    if (file.size > 0)
                        archivosConDatos += 1;
                })
            });
            return archivosConDatos > 0;
        };


        this.validarTamanioArchivos = function () {

            var archivosValidos = 0;
            var totalArchivos = 0;
            //console.log($("input[type=file]").length);
            $.each($("input[type=file]"), function (i, obj) {
                $.each(obj.files, function (j, file) {
                    if (funMunDataService.validarTamanioArchivo(file.size) === true)
                        archivosValidos++;
                    totalArchivos++;
                })
            });            

            return archivosValidos === totalArchivos;
        };

        this.validarExtensionTipoArchivos = function () {

            var archivosValidos = 0;
            var numeroArchivos = 0;
            $.each($("input[type=file]"), function (i, obj) {
                $.each(obj.files, function (j, file) {
                    var arregloNombreArchivo = file.name.split('.');
                    var ultimaPosicion = arregloNombreArchivo.length;
                    var extension = arregloNombreArchivo[ultimaPosicion - 1];
                    if (funMunDataService.validarExtensionArchivo(extension))
                        archivosValidos++;

                    numeroArchivos++;
                })
            });

            //console.log("archivosValidos: "+archivosValidos+", numeroArchivos: "+numeroArchivos);

            return archivosValidos === numeroArchivos;
        };


        this.validarTipoArchivos = function () {

            var archivosValidos = 0;
            var numeroArchivos = 0;
            $.each($("input[type=file]"), function (i, obj) {
                $.each(obj.files, function (j, file) {

                    var extension = file.type;

                    if (funMunDataService.validarExtension(extension))
                        archivosValidos++;

                    numeroArchivos++;
                })
            });

            return archivosValidos === numeroArchivos;
        };

        this.sauvegarder = function (data, event) {
            var validationUtility = new ValidationUtility();
            if (validationUtility.validate('html-data-form')) {         //Validamos el archivo
                this.save();
            }
            return;
        };

        this.save = function (date, event) {

            try {

                //event.preventDefault();

                vm.hideFileUpload();

                //var validationUtility = new ValidationUtility();

                //if (validationUtility.validate('html-data-form')) {         //Validamos el archivo

                //    //console.log("Es válida la forma");
                if (funMunDataService.esArchivoRequerido()) { //Es archivo requerido

                    //console.log("El archivo es requerido");
                    console.log("Tiene archivo para cargar: " + vm.hasFileToUpload());

                    if (vm.hasFileToUpload()) {//Tiene archivo para cargar
                        //console.log("Tiene archivos para cargar");
                        if (vm.validarTamanioArchivos()) {//Se valida el tamaño del archivo
                            //console.log("Es válido el tamaño del archivo");

                            if (vm.validarTipoArchivos()) {//Los archivos son extensiones válidas
                                //console.log("Son válidas las extensiones de los archivos");
                                $('#command-buttons').hide();
                                //$('#progress-bar').fadeIn();
                                try{
                                    var modeloDatos = ko.toJS(this.modelo);
                                    //console.log("modeloDatos: " + ko.toJSON(this.model));
                                }
                                catch (ex) {                                    
                                    console.log(ex);
                                }
                                funMunDataService.save(modeloDatos).done(function (response) {
                                    //debugger;

                                    if (response.id) {
                                        vm.modelo.id(response.id);
                                    }


                                    if (vm.hasFileToUpload()) {

                                        vm.uploadFile().done(function (result) {

                                            if (result.status === 'error') {
                                                vm.showFileError(result);
                                            }
                                            else {
                                                //vm.model.archivoUrl(result.archivoUrl);
                                                vm.showSuccess();
                                            }
                                        }).fail(function (error) {
                                            //debugger;
                                            vm.showFileError();

                                        });

                                    }
                                    else {

                                        vm.showSuccess();
                                    }



                                }).fail(function (error) {
                                    //debugger;

                                    vm.showError(error);
                                });

                            }//Termina validez del archivo
                            else {//El archivo es inválido
                                vm.mostrarMensajeError("El tipo de archivo es inválido.");
                                //vm.errorMessage("El tipo de archivo es inválido.");
                                //$('#fail-msg-container').fadeIn();
                            }//Termina el archivo es inválido

                        }//Termina es válido el tamaño del archivo
                        else { //Inicia no es válido el tamaño del archivo
                            vm.mostrarMensajeError("Tamaño de archivo excedido.");
                            //vm.errorMessage("Tamaño de archivo excedido.");
                            //$('#fail-msg-container').fadeIn();

                        }//Termina no es válido el tamaño del archivo


                    }//Termina tiene archivo para cargar
                    else {
                        //No tiene archivo para cargar
                        vm.mostrarMensajeError("No se ha cargado algún archivo.");
                        //vm.errorMessage("No se ha cargado algún archivo.");
                        //$('#fail-msg-container').fadeIn();

                    }//Termina no tiene archivo para cargar

                }//Termina es archivo requerido
                else {//'No es archivo requerido'

                    console.log("No es requerido, tiene archivo para cargar: " + vm.hasFileToUpload());
                    if (vm.hasFileToUpload()) {//Tiene archivo para cargar
                        //console.log("Tiene archivos para cargar");
                        if (vm.validarTamanioArchivos()) {//Se valida el tamaño del archivo
                            //console.log("Es válido el tamaño del archivo");

                            if (vm.validarTipoArchivos()) {//Los archivos son extensiones válidas
                                //console.log("Son válidas las extensiones de los archivos");
                                $('#command-buttons').hide();
                                //$('#progress-bar').fadeIn();

                                var modeloDatos = ko.toJS(this.modelo);
                                console.log(modeloDatos)
                                funMunDataService.save(modeloDatos).done(function (response) {
                                    //debugger;


                                    if (response.id) {
                                        vm.modelo.id(response.id);
                                    }


                                    if (vm.hasFileToUpload()) {

                                        vm.uploadFile().done(function (result) {


                                            if (result.status === 'error') {
                                                vm.showFileError(result);
                                            }
                                            else {
                                                //vm.model.archivoUrl(result.archivoUrl);
                                                vm.showSuccess();
                                            }
                                        }).fail(function (error) {
                                            //debugger;
                                            console.log("Error al cargar el archivo: " + error);
                                            vm.showFileError();

                                        });

                                    }
                                    else {
                                        //debugger;
                                        vm.showSuccess();
                                    }



                                }).fail(function (error) {
                                    //debugger;
                                    
                                    vm.showError(error);
                                });

                            }//Termina validez del archivo
                            else {//El archivo es inválido
                                vm.mostrarMensajeError("El tipo de archivo es inválido.");
                                //vm.errorMessage("El tipo de archivo es inválido.");
                                //$('#fail-msg-container').fadeIn();
                            }//Termina el archivo es inválido

                        }//Termina es válido el tamaño del archivo
                        else { //Inicia no es válido el tamaño del archivo
                            vm.mostrarMensajeError("Tamaño de archivo excedido.");
                            //vm.errorMessage("Tamaño de archivo excedido.");
                            //$('#fail-msg-container').fadeIn();

                        }//Termina no es válido el tamaño del archivo


                    }//Termina tiene archivo para cargar
                    else {
                        //No tiene archivo para cargar


                        $('#command-buttons').hide();
                        //$('#progress-bar').fadeIn();

                        var modeloDatos = ko.toJS(this.modelo);
                        console.log("El modelo de datos es: ");
                        console.log(modeloDatos);
                        funMunDataService.save(modeloDatos).done(function (response) {
                            //debugger;

                            if (response.id) {
                                vm.modelo.id(response.id);
                            }


                            //if (vm.hasFileToUpload()) {

                            //    vm.uploadFile().done(function (result) {

                            //        if (result.status === 'error') {
                            //            vm.showFileError(result);
                            //        }
                            //        else {
                            //            //vm.model.archivoUrl(result.archivoUrl);
                            //            vm.showSuccess();
                            //        }
                            //    }).fail(function (error) {
                            //        //debugger;
                            //        vm.showFileError();

                            //    });

                            //}
                            //else {
                            //    //debugger;
                            //    vm.showSuccess();
                            //}

                            vm.showSuccess();

                        }).fail(function (error) {
                            //debugger;

                            vm.showError(error);
                        });



                    }//Termina no tiene archivo para cargar


                }//Termina 'No es archivo requerido'


                //}//Es válido el archivo
            }
            catch (excepcion) {
                toastr.error(excepcion);
            }
        };


        this.requestDelConfirm = function () {
            $('#del-confirm').modal();
        };

        this.del = function () {
            var modeloDatos = ko.toJS(this.modelo);

            funMunDataService.del(modeloDatos).done(function (response) {
                vm.showDelete();
            }).fail(function (error) {
                vm.showError(error);
            }).always(function () {
                $('#del-confirm').modal('hide');
            });
        };

    };

    $(function () {        


        vm = new ViewModel(simverApp.ModeloDatos);
        
        ko.applyBindings(vm);
            
        if (typeof simverApp.Inicializacion == 'function') {            
            simverApp.Inicializacion(vm);
        }        
        
    });

}(window.simverApp));