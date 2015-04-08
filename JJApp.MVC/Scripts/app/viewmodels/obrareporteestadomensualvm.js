(function (simverApp) {

    function ModeloDatos(data) {
        var self = this;
        self.ambito = {};        
        //self.modelo = new simverApp.TechoFinanciero(data.modelo, self);
        self.ambito.obras = ko.observableArray();
        self.ambito.fondos = ko.observableArray(data.fondos);
        self.ambito.fondoSeleccionado = ko.observable();
        self.ambito.periodos = ko.observableArray(data.periodos);
        self.ambito.periodoSeleccionado = ko.observable();
        self.ambito.obtenerObras = function () {
            var fondoId = self.ambito.fondoSeleccionado();
            var periodoId = self.ambito.periodoSeleccionado();
            simverApp.ServicioDatosReporteObras.obtenerObras(fondoId, periodoId).done(function (response) {
                self.ambito.obras([]);                                
                self.ambito.obras(response);
            }).fail(function () {
                toastr.error("Error");
            });
        };
        self.ambito.crearReporteEstadoMensualObra = function () {            
            var fondoId = self.ambito.fondoSeleccionado();
            var periodoId = self.ambito.periodoSeleccionado();
            simverApp.ServicioDatosReporteObras.crearReporteEstadoMensualObra(fondoId, periodoId).done(function (response) {
                $('#success-confirm').modal();
            }).fail(function (error) {
                toastr.error(error);
            });
        };               
    }
 
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