(function (simverApp) {

    function ModeloDatos(data) {
        var self = this;
        self.ambito = {};
        self.modelo = new simverApp.Obra(data.obra,self);
        self.ambito.techos = ko.observableArray(data.fondos);
        self.ambito.techoFinanciero = ko.observable(data.techoFinanciero).numero();
        self.ambito.montoAprobadoPresupuestadoInicial = ko.observable(data.montoAprobadoPresupuestado).numero();
        self.ambito.montoAprobadoPresupuestado = ko.computed(function () {
            var valMontoAprobadoPresupuestadoInicial = isNaN(self.ambito.montoAprobadoPresupuestadoInicial()) ? 0 : parseFloat(+self.ambito.montoAprobadoPresupuestadoInicial());
            var valDiferenciaFuenteFinanciamiento = isNaN(self.modelo.diferenciaFuenteFinanciamiento()) ? 0 : parseFloat(+self.modelo.diferenciaFuenteFinanciamiento());
            return (valMontoAprobadoPresupuestadoInicial + valDiferenciaFuenteFinanciamiento).toFixed(2);
        }).numero();
        self.ambito.montoDisponible = ko.computed(function () {
            var techoFinanciero = isNaN(self.ambito.techoFinanciero()) ? 0 : parseFloat(+self.ambito.techoFinanciero());
            var montoAprobado = isNaN(self.ambito.montoAprobadoPresupuestado()) ? 0 : parseFloat(+self.ambito.montoAprobadoPresupuestado());
            return (techoFinanciero - montoAprobado);
        }).numero();        
        self.ambito.tiposFondo = ko.observableArray(data.tiposFondo);
        self.ambito.tiposFondoId = ko.observable(data.tiposFondoId);
        self.ambito.tipoFondoId = ko.observable(data.tipoFondoId);
        self.ambito.tipoFondoId.subscribe(function (tipoFondoId) {
            if (tipoFondoId != null) {
                simverApp.servicioDatos.obtenerFondo(tipoFondoId).done(function (response) {
                    self.ambito.techos(response);
                    self.ambito.techoFinanciero(0);
                    self.ambito.montoAprobadoPresupuestadoInicial(0);
                }).fail(function () {
                    toastr.error("Error: Lo sentimos. No se pudo cargar el techo financiero del fondo solicitado.");
                });
            }
        });
        self.ambito.beneficiarios = ko.observableArray(data.beneficiarios);
        self.ambito.unidadesProyecto = ko.observableArray(data.unidadesProyecto);
        self.ambito.programas = ko.observableArray(data.estructurasApertura);
        self.ambito.subprogramas = ko.observableArray(data.subprogramas);
        self.ambito.estructuraAperturaId = ko.observable(data.obra.estructuraAperturaId);
        self.ambito.tipologias = ko.observableArray(data.tipologias);
        self.ambito.tipologiaId = ko.observable(data.tipologiaId);
        self.ambito.tipologiaVisible = ko.observable(data.tipologiaVisible);
        self.ambito.programaId = ko.observable(data.programaId);
        self.ambito.subprogramaId = ko.observable(data.subprogramaId);
        self.ambito.programaId.subscribe(function (programaId) {
            self.ambito.subprogramaId(undefined);
            self.ambito.subprogramas(undefined);
            self.ambito.estructuraAperturaId(undefined);
            self.ambito.tipologias(undefined);
            self.ambito.tipologiaVisible(false);
            if (programaId != null) {
                simverApp.servicioDatos.obtenerEstructurasApertura(programaId).done(function (response) {
                    self.ambito.subprogramas(response);
                }).fail(function () {
                    toastr.error("Error: Lo sentimos. No se pudo cargar el techo financiero del fondo solicitado.");
                });
            }
        });
        self.ambito.subprogramaId.subscribe(function (subprogramaId) {

            //self.estructuraAperturaId(undefined);
            self.modelo.estructuraAperturaId(subprogramaId);
            self.ambito.tipologias(undefined);
            self.ambito.tipologiaVisible(false);

            if (subprogramaId != null) {
                simverApp.servicioDatos.obtenerEstructurasApertura(subprogramaId).done(function (response) {                    
                    if (response.length > 0) {                        
                        self.ambito.tipologiaVisible(true);
                        self.ambito.tipologias(response);
                    }
                    else {                        
                        self.ambito.tipologiaVisible(false);
                        simverApp.servicioDatos.obtenerDatosTipologia(subprogramaId).done(function (response) {
                            self.ambito.beneficiarios(response.beneficiarios);
                            self.ambito.unidadesProyecto(response.unidadesProyecto);
                            self.modelo.obraAccion(response.tipologia.obraAccion);
                            self.ambito.obraAccion(response.tipologia.obraAccion)
                        }).fail(function(){
                            toastr.error("Error: Lo sentimos. No se pudo cargar la información de la tipología solicitada.");
                        });   
                    }
                }).fail(function () {
                    toastr.error("Error: Lo sentimos. No se pudo cargar el techo financiero del fondo solicitado.");
                });

            }
        });

        self.ambito.obraAccion = ko.observable(data.obra.obraAccion);        
               
        self.ambito.tipologiaId.subscribe(function (estructuraAperturaId) {
            if (estructuraAperturaId != null) {
                self.modelo.estructuraAperturaId(estructuraAperturaId);
                simverApp.servicioDatos.obtenerDatosTipologia(estructuraAperturaId).done(function (response) {
                    
                    self.ambito.beneficiarios(response.beneficiarios);
                    self.ambito.unidadesProyecto(response.unidadesProyecto);
                    self.modelo.obraAccion(response.tipologia.obraAccion);
                    self.ambito.obraAccion(response.tipologia.obraAccion)
                }).fail(function () {
                    toastr.error("Error: Lo sentimos. No se pudo cargar la información de la tipología solicitada.");
                });

            }
        });                
        self.ambito.periodos = ko.observableArray(data.periodos);        
        self.ambito.anio = ko.observable(data.anio);
        self.ambito.numeroEntidad = ko.observable(data.numeroEntidad);
        self.ambito.numeroMunicipio = ko.observable(data.numeroMunicipio);

        self.ambito.obraValida = ko.observable(false);
        self.ambito.puedeGuardar = ko.computed(function () {
            if(self.modelo.id()==0){
                if ((self.ambito.obraValida() === true) && (self.ambito.montoDisponible() >= 0)
                    && (self.modelo.techoFinancieroId() > 0)
                    && (self.modelo.estructuraAperturaId() > 0)
                    && (self.modelo.localidadId() > 0)
                    && (self.modelo.beneficiarioId() > 0) && (self.modelo.unidadProyectoId() > 0) && (self.modelo.modalidadEjecucionId() > 0))
                    return true;                
            }
            else {
                if ((self.ambito.montoDisponible() >= 0)
                    && (self.modelo.techoFinancieroId() > 0)
                    && (self.modelo.estructuraAperturaId() > 0)
                    && (self.modelo.localidadId() > 0)
                    && (self.modelo.beneficiarioId() > 0) && (self.modelo.unidadProyectoId() > 0) && (self.modelo.modalidadEjecucionId() > 0))
                    return true;                
            }
            return false;

        });
        self.ambito.localidadVal = ko.observable(data.obra.localidad);       
        self.ambito.numeroObraCalc = ko.observable();
        self.ambito.numeroObraCalc.subscribe(function (valorObra) {
            if (valorObra.length == 4) {
                var numeroObraCompleto = self.ambito.anio() + self.ambito.numeroEntidad()
                                        + self.ambito.numeroMunicipio() + valorObra;
                simverApp.servicioDatos.validarNumeroObra(numeroObraCompleto).done(function (response) {
                    if (response.valida) {
                        self.ambito.obraValida(true);
                        self.modelo.numeroObra(numeroObraCompleto);
                    }
                    else {
                        self.ambito.obraValida(false);
                    }
                }).fail(function () {
                    toastr.error("Error: Lo sentimos. No se pudo cargar el techo financiero del fondo solicitado.");
                });
            }
            else {
                self.ambito.obraValida(false);
            }
        }, this);
        self.ambito.modalidadesEjecucion = ko.observableArray(data.modalidadesEjecucion);
    }

    funMunDataService.asignarUrl('api/ProgramaInversionAPI/');    
    var localidadesMunicipio = new Bloodhound({
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.value);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 11,
        remote: {
            url: rootDir + 'ProgramaInversion/ObtenerLocalidades?query=%QUERY',
            filter: function (localidades) {
                return $.map(localidades, function (localidad) {
                    return {
                        id: localidad.id,
                        value: localidad.name,
                        gradoRezagoSocial: localidad.gradoRezagoSocial
                    };
                });
            }
        }
    });

    simverApp.localidadesMunicipio = localidadesMunicipio;
    //Inicializamos el bloodhound engine
    simverApp.localidadesMunicipio.initialize();
    simverApp.ModeloDatos = new ModeloDatos(simverApp.data);
    simverApp.Inicializacion = function () {

        $.validator.addMethod("mayorId", function (value, element) {
            return value > 0;
        }, "Es necesario que el valor sea mayor a 0");

        $.validator.addMethod("formatoFecha", function (value, element) {

            if (element.required == true) {                
                return value.match(/^(0[1-9]|[12][0-9]|3[01])[- //.](0[1-9]|1[012])[- //.](19|20)\d\d$/);
            }
            else {                
                if (value == false) {                    
                    return true;
                }
                else {                    
                    return value.match(/^(0[1-9]|[12][0-9]|3[01])[- //.](0[1-9]|1[012])[- //.](19|20)\d\d$/);
                }
            }
            return false;
        },
        "Por favor, escriba una fecha en el formato dd/mm/yyyy"
        );



        $("#html-data-form").validate({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            ignore: [],
            submitHandler: function () {
                var montoDisponible = vm.ambito.montoDisponible();
                var fuenteFinanciamiento = vm.modelo.fuenteFinanciamiento();
                if (montoDisponible >= 0 &&fuenteFinanciamiento>0) {
                    vm.save();
                }
                else {
                    toastr.error("No es posible guardar la obra. Se ha excedido el monto disponible del techo financiero.");
                }                                
            },
            invalidHandler: function (event, validator) {
                toastr.error("Es necesario llenar los campos necesarios para poder agregar el formato.");            
            },
            rules: {
                localidadId: {
                    mayorId:true
                },
                fechaActa: {
                    required: true,
                    formatoFecha: true
                },
                fechaProgramadaInicio: {
                    required: true,
                    formatoFecha: true
                },
                fechaProgramadaTermino: {
                    required: true,
                    formatoFecha: true
                }                
            },
            messages: {                
                localidadId:{
                    mayorId:"La localidad es inválida."
                },
                fechaActa: {
                    required: "La fecha de acta es requerida",
                    formatoFecha: "Por favor, escriba una fecha en el formato dd/mm/yyyy"
                },
                fechaProgramadaInicio: {
                    required: "La fecha programada de inicio es requerida",
                    formatoFecha: "Por favor, escriba una fecha en el formato dd/mm/yyyy"
                },
                fechaProgramadaTermino: {
                    required: "La fecha programada de término es requerida",
                    formatoFecha: "Por favor, escriba una fecha en el formato dd/mm/yyyy"
                }                
            }
        });
    };    
}(window.simverApp));