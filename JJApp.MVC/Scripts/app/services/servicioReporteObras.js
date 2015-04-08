(function (simverApp) {
    var ServicioDatosReporteObras = {
        obtenerObras: function (fondoId,periodoId) {
            var promise = $.Deferred();
            var objeto = { "fondoId": fondoId, "periodoId": periodoId };
                $.ajax({
                    type: 'GET',
                    url: rootDir + 'ReporteEstadoObra/ObtenerObras',
                    data: objeto,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (response) {
                        promise.resolve(response);
                    },
                    error: function (xhr, status, error) {
                        var error = 'Error al obtener las obras con el periodo y fondo seleccionado: ' + error;
                        promise.reject(error);
                    }
                });

                return promise;
        },
        generarEstadoMensualObra: function (fondoId, periodoId) {
            var promise = $.Deferred();
            var objeto = { "fondoId": fondoId, "periodoId": periodoId };
            $.ajax({
                type: 'GET',
                url: rootDir + 'ReporteEstadoObra/GenerarReporteMensualObra',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function (xhr, status, error) {
                    var error = 'Error al generar el reporte mensual de obra: ' + error;
                    promise.reject(error);
                }
            });

            return promise;
        },
        crearReporteEstadoMensualObra: function (fondoId, periodoId) {            
            var promise = $.Deferred();
            var objeto = { "techoFinancieroId": fondoId, "periodoId": periodoId };
            $.ajax({
                type: 'GET',
                url: rootDir + 'ReporteEstadoObra/CrearReporteMensualObra',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function (xhr, status, error) {
                    var error = 'Error al generar el reporte mensual de obra: '+error;
                    promise.reject(error);
                }
            });
            return promise;
        }
    };
    simverApp.ServicioDatosReporteObras = ServicioDatosReporteObras;
}(window.simverApp));