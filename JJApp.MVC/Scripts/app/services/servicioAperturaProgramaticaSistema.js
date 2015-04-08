(function (simverApp) {

    var ServicioDatosEstructuraApertura = {

        guardarEstructuraApertura: function (estructuraAperturaId, id,clave,conceptoEstructuraApertura) {
            var promise = $.Deferred();
            var objeto = {
                "estructuraAperturaId": estructuraAperturaId,
                "id": id,
                "clave": clave,
                "conceptoEstructuraApertura": conceptoEstructuraApertura
            };
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/AgregarEstructuraApertura',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al crear la estructura de apertura programática';
                    promise.reject(error);
                }
            });

            return promise;
        },
        agregarTipologia: function (tipologia) {
            var promise = $.Deferred();            
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/AgregarTipologia',
                data: tipologia,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al crear la tipología';
                    promise.reject(error);
                }
            });

            return promise;
        },
        actualizarTipologia: function (tipologia) {
            var promise = $.Deferred();
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/ActualizarTipologia',
                data: tipologia,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al crear la tipología';
                    promise.reject(error);
                }
            });

            return promise;
        },
        actualizarEstructura: function (estructuraAperturaId, clave, nombre) {

            var promise = $.Deferred();
            var objeto = {
                "estructuraAperturaId": estructuraAperturaId,
                "clave": clave,
                "nombre": nombre
            };
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/ActualizarEstructura',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al crear la tipología';
                    promise.reject(error);
                }
            });

            return promise;
        },
        agregarUnidadProyecto: function (estructuraAperturaId, unidadProyectoId) {
            var promise = $.Deferred();
            var objeto = {
                "estructuraAperturaId": estructuraAperturaId,               
                "unidadProyectoId": unidadProyectoId
            };
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/AgregarUnidadProyecto',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al agregar la unidad de proyecto';
                    promise.reject(error);
                }
            });
            return promise;
        },
        agregarBeneficiario: function (estructuraAperturaId, beneficiarioId) {
            var promise = $.Deferred();
            var objeto = {
                "estructuraAperturaId": estructuraAperturaId,
                "beneficiarioId": beneficiarioId
            };
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/AgregarBeneficiario',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al agregar el beneficiario';
                    promise.reject(error);
                }
            });
            return promise;
        },
        eliminarUnidad: function (estructuraAperturaId, unidadId) {
            var promise = $.Deferred();
            alert("estructuraAperturaId: " + estructuraAperturaId + ",  unidadId: " + unidadId);
            var objeto = {
                "estructuraAperturaId": estructuraAperturaId,
                "unidadId": unidadId
            };
            
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/EliminarUnidadProyecto',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al eliminar la unidad';
                    promise.reject(error);
                }
            });
            return promise;
        },
        eliminarBeneficiario: function (estructuraAperturaId, beneficiarioId) {
            var promise = $.Deferred();
            alert("estructuraAperturaId: " + estructuraAperturaId + ",  beneficiarioId: " + beneficiarioId);
            var objeto = {
                "estructuraAperturaId": estructuraAperturaId,
                "beneficiarioId": beneficiarioId
            };
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/EliminarBeneficiario',
                data: objeto,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al eliminar eliminar el beneficiario';
                    promise.reject(error);
                }
            });
            return promise;
        },
        agregarAperturaProgramaticaFism: function (aperturaFism) {
            var promise = $.Deferred();
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/AgregarAperturaFISM',
                data: aperturaFism,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al crear la apertura FISM';
                    promise.reject(error);
                }
            });

            return promise;
        },
        actualizarAperturaProgramaticaFism: function (aperturaFism) {
            var promise = $.Deferred();
            $.ajax({
                type: 'GET',
                url: rootDir + 'AperturaProgramaticaSistema/ActualizarAperturaFISM',
                data: aperturaFism,
                contentType: 'application/json',
                dataType: 'json',
                success: function (response) {
                    promise.resolve(response);
                },
                error: function () {
                    var error = 'Error al crear la apertura FISM';
                    promise.reject(error);
                }
            });

            return promise;
        },
        obtenerDatosTipologia: function (estructuraAperturaId) {
        var promise = $.Deferred();
        var objeto = {
            "estructuraAperturaId": estructuraAperturaId,            
        };
        $.ajax({
            type: 'GET',
            url: rootDir + 'AperturaProgramaticaSistema/ObtenerDatosTipologia',
            data: objeto,
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                promise.resolve(response);
            },
            error: function () {
                var error = 'Error al obtener los datos de la apertura';
                promise.reject(error);
            }
        });

        return promise;
    }

    };
    simverApp.ServicioDatosEstructuraApertura = ServicioDatosEstructuraApertura;
}(window.simverApp));