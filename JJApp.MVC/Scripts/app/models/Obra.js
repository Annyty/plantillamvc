(function (simverApp) {

    function Obra(data,padre) {
        var self = this;
        self.id = ko.observable(data.id);        
        self.fondoId = ko.observable(data.fondoId);
        self.fondo = ko.observable(data.fondo);
        self.estructuraAperturaId = ko.observable(data.estructuraAperturaId);
        self.estructuraApertura = ko.observable(data.estructuraApertura);
        self.obraAccion = ko.observable(data.obraAccion);
        self.numeroObra = ko.observable(data.numeroObra);
        self.descripcion = ko.observable(data.descripcion);
        self.localidadId = ko.observable(data.localidadId);
        self.localidad = ko.observable(data.localidad);
        self.gradoRezagoSocial = ko.observable(data.gradoRezagoSocial);        
        self.zap = ko.observable(data.zap);
        self.ageb = ko.observable(data.ageb);
        self.fechaProgramadaInicio = ko.observable(data.fechaProgramadaInicio);
        self.fechaProgramadaTermino = ko.observable(data.fechaProgramadaTermino);
        self.costoUnitario = ko.observable(data.costoUnitario).numero();
        self.fuenteFinanciamientoInicial = ko.observable(data.fuenteFinanciamiento).numero();
        self.fuenteFinanciamientoFinal = ko.observable(data.fuenteFinanciamiento).numero();
        self.diferenciaFuenteFinanciamiento = ko.computed(function () {
            return self.fuenteFinanciamientoFinal() - self.fuenteFinanciamientoInicial();
        }).numero();
        self.fuenteFinanciamiento = ko.computed(function () {
            return self.fuenteFinanciamientoInicial() + self.diferenciaFuenteFinanciamiento();
        }).numero();
        self.aportacionMunicipal = ko.observable(data.aportacionMunicipal).numero();
        self.aportacionBeneficiarios = ko.observable(data.aportacionBeneficiarios).numero();
        self.productosFinancieros = ko.observable(data.productosFinancieros).numero();
        self.otrasFuentesFederales = ko.observable(data.otrasFuentesFederales).numero();
        self.otrasFuentesEstatales = ko.observable(data.otrasFuentesEstatales).numero();
        self.otros = ko.observable(data.otros).numero();
        self.costoTotalObra = ko.computed(function () {

            var valFuenteFinanciamiento = isNaN(self.fuenteFinanciamientoFinal()) ? 0 : parseFloat(+self.fuenteFinanciamientoFinal());
            var valAportacionMunicipal = isNaN(self.aportacionMunicipal()) ? 0 : parseFloat(+self.aportacionMunicipal());
            var valAportacionBeneficiarios = isNaN(self.aportacionBeneficiarios()) ? 0 : parseFloat(+self.aportacionBeneficiarios());
            var valProductosFinancieros = isNaN(self.productosFinancieros()) ? 0 : parseFloat(+self.productosFinancieros());
            var valOtrasFuentesFederales = isNaN(self.otrasFuentesFederales()) ? 0 : parseFloat(+self.otrasFuentesFederales());
            var valOtrasFuentesEstatales = isNaN(self.otrasFuentesEstatales()) ? 0 : parseFloat(+self.otrasFuentesEstatales());
            var valOtros = isNaN(self.otros()) ? 0 : parseFloat(+self.otros());
            var suma = valFuenteFinanciamiento + valAportacionMunicipal + valAportacionBeneficiarios +
                valProductosFinancieros + valOtrasFuentesEstatales + valOtrasFuentesFederales + valOtros;
            return suma;


        }).numero();

        self.unidadProyectoId = ko.observable(data.unidadProyectoId);
        self.unidadProyecto = ko.observable(data.unidadProyecto);
        self.cantidadUnidadProyecto = ko.observable(data.cantidadUnidadProyecto).numero();
        self.beneficiarioId = ko.observable(data.beneficiarioId);
        self.beneficiario = ko.observable(data.beneficiario);
        self.cantidadBeneficiario = ko.observable(data.cantidadBeneficiario).numero();
        self.modalidadEjecucionId = ko.observable(data.modalidadEjecucionId);
        self.modalidadEjecucion = ko.observable(data.modalidadEjecucion);        
        self.fechaActa = ko.observable(data.fechaActa);
        self.latitud = ko.observable(data.latitud);
        self.longitud = ko.observable(data.longitud);
        self.esPropuestaInversion = ko.observable(data.esPropuestaInversion);
        self.periodoId = ko.observable(data.periodoId);
        self.periodo = ko.observable(data.periodo);
        self.programaInversion = ko.observable(data.programaInversion);
        self.techoFinancieroId = ko.observable(data.techoFinancieroId);
        self.techoFinancieroId.subscribe(function (techoFinancieroId) {
            if (techoFinancieroId != null) {                
                simverApp.servicioDatos.obtenerTecho(techoFinancieroId).done(function (response) {                    
                    padre.ambito.techoFinanciero(response.cantidad);
                    padre.ambito.montoAprobadoPresupuestadoInicial(response.montoAprobado);
                    self.fondoId(response.fondoId);
                    self.programaInversion(response.programaInversion);
                }).fail(function () {
                    toastr.error("Error: Lo sentimos. No se pudo cargar el techo financiero del fondo solicitado.");
                });                
            }
        });
        self.techoFinanciero = ko.observable(data.techoFinanciero);
        self.diferenciaFuenteFinanciamiento = ko.computed(function () {
            return self.fuenteFinanciamientoFinal() - self.fuenteFinanciamientoInicial();
        }).numero();
        


    }
    simverApp.Obra = Obra;

}(window.simverApp));