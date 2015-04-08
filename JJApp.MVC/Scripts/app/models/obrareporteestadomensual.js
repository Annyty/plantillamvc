(function (simverApp) {

    function RepoteEstadoMensualObra() {
        var self = this;        
        self.fondoId = ko.observable();
        self.periodoId = ko.observable();
    }


    function ObraReporteEstadoMensual(data) {
        var self = this;
        self.id = ko.observable(data.id);
        self.numeroObra = ko.observable(data.numeroObra);
        self.descripcion = ko.observable(data.descripcion);
        self.noFormato09V = ko.observable(data.noFormato09V);
        self.noFormato09H = ko.observable(data.noFormato09H);
        self.noFormato11 = ko.observable(data.noFormato11);
        self.noFormato12 = ko.observable(data.noFormato12);
    }
    simverApp.ObraReporteEstadoMensual = ObraReporteEstadoMensual;    

}(window.simverApp));