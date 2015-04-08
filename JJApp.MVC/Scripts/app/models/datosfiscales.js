(function (simverApp) {
    function DatosFiscales(data) {
        var self = this;
        self.id = ko.observable(data.id);
        self.rfc = ko.observable(data.rfc);        
        self.razonSocial = ko.observable(data.razonSocial);
        self.domicilioFiscal = ko.observable(data.domicilioFiscal);
    }
    simverApp.DatosFiscales = DatosFiscales;
}(window.simverApp));