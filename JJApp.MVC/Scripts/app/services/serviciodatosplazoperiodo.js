(function (simverApp) {
    var ServicioDatosPlazoPeriodo = {
        obtenerPeriodos: function (ejercicioId) {
            var promise = $.Deferred();
            var objeto = { "id": ejercicioId };
            $.ajax({
                type: 'GET',
                url: rootDir + 'PlazoPeriodo/ObtenerPeriodos',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function (xhr, status, error) {
                    var error = 'Error al obtener los periodos del ejercicio seleccionado: ' + error;
                    promise.reject(error);
                }
            });
            return promise;
        }
    };
    simverApp.ServicioDatosPlazoPeriodo = ServicioDatosPlazoPeriodo;
}(window.simverApp));