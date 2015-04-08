(function (simverApp) {

    function PlazoPeriodo(data) {
        var self = this;
        self.id=ko.observable(data.id);
        self.ejercicioId = ko.observable(data.ejercicioId);
        self.ejercicio = ko.observable(data.ejercicio);
        self.periodoId = ko.observable(data.periodoId);
        self.periodo = ko.observable(data.periodo);
        self.fechaInicio=ko.observable(data.fechaInicio);
        self.fechaTermino=ko.observable(data.fechaTermino);
        self.mensaje = ko.observable(data.mensaje);
    }

    simverApp.PlazoPeriodo = PlazoPeriodo;
}(window.simverApp));