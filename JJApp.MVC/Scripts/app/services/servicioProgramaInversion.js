(function (simverApp) {

    var ServicioDatos={

        obtenerTecho:function(fondoId){
            var promise = $.Deferred();
            var objeto = { "fondoId": fondoId };
            $.ajax({
                type: 'GET',
                url: rootDir + 'ProgramaInversion/ObtenerTecho',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',                
                success: function (response) {                    
                    promise.resolve(response);
                },
                error: function () {                    
                    var error = 'Error al obtener el techo financiero';
                    promise.reject(error);
                }
            });

            return promise;
        },
        obtenerFondo: function (tipoFondoId) {
            var promise = $.Deferred();
            var objeto = { "tipoFondoId": tipoFondoId };
            $.ajax({
                type: 'GET',
                url: rootDir + 'ProgramaInversion/ObtenerFondo',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                context: this,
                success: function (response) {                    
                    promise.resolve(response);                    
                },
                error: function (response) {                    
                    var error = 'Lo sentimos, no se pueden cargar los fondos';
                    promise.reject(error);
                }
            });
            return promise;
        },
        obtenerFondo: function (tipoFondoId) {
            var promise = $.Deferred();
            var objeto = { "tipoFondoId": tipoFondoId };
            $.ajax({
                type: 'GET',
                url: rootDir + 'ProgramaInversion/ObtenerFondo',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                context: this,
                success: function (response) {
                    promise.resolve(response);
                },
                error: function (response) {
                    var error = 'Lo sentimos, no se pueden cargar los fondos';
                    promise.reject(error);
                }
            });
            return promise;
        },
        obtenerEstructurasApertura: function (estructuraAperturaId) {
            var promise = $.Deferred();

            var objeto = { "estructuraAperturaId": estructuraAperturaId };

            $.ajax({
                type: 'GET',
                url: rootDir + 'ProgramaInversion/ObtenerEstructuras',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                context: this,
                success: function (response) {
                    promise.resolve(response);                   
                },
                error: function (response) {
                                        
                    var error = "Error: Lo sentimos. No se pudo cargar la apertura programática.";
                    promise.reject(error);
                }
            });
            return promise;
        },
        obtenerDatosTipologia: function (estructuraAperturaId) {
            var promise = $.Deferred();

            var objeto = { "estructuraAperturaId": estructuraAperturaId };

            $.ajax({
                type: 'GET',
                url: rootDir + 'ProgramaInversion/ObtenerInfoObra',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',                
                success: function (response) {
                    promise.resolve(response);
                },
                error: function (response) {
                    var error = "Error: Lo sentimos. No se pudo cargar la información de la tipología.";
                    promise.reject(error);
                }
            });
            return promise;
        },
        validarNumeroObra: function (numeroObraCompleto) {
            var promise = $.Deferred();
            var objeto = { "numeroObra": numeroObraCompleto };
            $.ajax({
                type: 'GET',
                url: rootDir + 'ProgramaInversion/ValidarObra',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                context: this,
                success: function (response) {
                    promise.resolve(response);                    
                },
                error: function (response) {                    
                    var error = "Error: Lo sentimos. No se pudo validar la obra.";
                    promise.reject(error);
                }
            });
            return promise;
        }
        

    };
    simverApp.servicioDatos = ServicioDatos;    
}(window.simverApp));