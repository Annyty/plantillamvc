(function (simverApp) {
    function EstadoFinanciero(data, padre) {
        var self = this;
        self.id = ko.observable(data.id);
        self.nombreArchivo = ko.observable(data.nombreArchivo);        
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
        self.nombre = ko.observable(data.nombre);
        self.descripcion = ko.observable(data.descripcion);
    }
    simverApp.EstadoFinanciero = EstadoFinanciero;
}(window.simverApp));