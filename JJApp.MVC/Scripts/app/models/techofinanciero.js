(function (simverApp) {

    function TechoFinanciero(data, padre) {        
        var self = this;
        self.id = ko.observable(data.id);
        self.nombreArchivo = ko.observable(data.nombreArchivo);
        self.fondoId = ko.observable(data.fondoId);
        self.archivoUrl = ko.computed({
            read: function () {                
                var
                    nombreArchivo = (self.nombreArchivo() === '' || self.nombreArchivo() === undefined || self.nombreArchivo() === null) ?
                                'sin-documento.png' : self.nombreArchivo(),
                    url = rootDir + data.archivoUrlPrefix + nombreArchivo;                
                return url;
            },
            write: function (value) {
                var parts = value.split('/');
                self.nombreArchivo(parts[parts.length - 1])
            }
        });
        self.cantidad = ko.observable(data.cantidad).numero();
        self.tipoFondo = ko.observable(data.tipoFondo);
        self.fondo = ko.observable(data.fondo);
    }
    simverApp.TechoFinanciero = TechoFinanciero;

}(window.simverApp));