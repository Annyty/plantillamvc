var _urlService = '';
var _urlImagenServicio = '';
var _urlArchivoServicio = '';
var verbosHttp = {
    POST: 'POST',
    PUT: 'PUT',
    GET: 'GET',
    DELETE: 'DELETE'
};

moment.lang('es');

$.idleTimeout('#idletimeout', '#idletimeout a', {    
    idleAfter: 1800, // 30 minutos
    pollingInterval: 900, // 15 minutos
    keepAliveURL: '/Home/KeepAlive',
    serverResponseEquals: 'OK',
    warningLength: 120, // give the user 60 seconds to respond
    onTimeout: function () {
        // redirect to login if the user takes no action
        $(this).slideUp();
        window.location = "/Account/Login";
    },
    onIdle: function () {
        $(this).slideDown(); // show the warning bar
    },
    onCountdown: function (counter) {
        $(this).find("span").html(counter); // update the counter
    },
    onResume: function () {
        $(this).slideUp(); // hide the warning bar
    },
    onAbort: function () {
        window.location = "/Account/Login";
    }
});

var funMunDataService = (function () {

    var ds = {
        arregloExtensiones: [],
        tamanioArchivo: 0,
        archivoRequerido: false,
        commit: function (type, url, data) {
            //Eliminamos el elemento 'id' cuando realizamos una inserción
            if (type == verbosHttp.POST) {
                delete data['id'];
            }
            return $.ajax({
                type: type,
                url: url,
                data: data,
                dataType: 'json'
            });
        },
        del: function (data) {
            return this.commit(verbosHttp.DELETE, ds.urlService + data.id);
        },
        save: function (data) {
            var type = verbosHttp.POST,
                url = ds.urlService;
            //console.log(data);
            if (data.id > 0) {
                type = verbosHttp.PUT;
                url += data.id;
            }
            return this.commit(type, url, data);
        },
        get: function (data) {
            var type = verbosHttp.GET,
                url = ds.urlService;
            if (data.id > 0) {
                url += data.id;
            }
            return this.commit(type, url, data);
        },
        saveImage: function (data) {
            return $.ajax({
                type: verbosHttp.POST,
                url: ds.urlServicioImagen,
                processData: false,
                contentType: false,
                data: data
            });
        },
        saveFile: function (data) {
            return $.ajax({
                type: verbosHttp.POST,
                url: ds.urlServicioArchivo,
                processData: false,
                contentType: false,
                data: data
            });
        },
        asignarExtensionesValidas: function () {
            if (arguments.length > 0) {
                _.each(arguments, function (extension) {
                    ds.arregloExtensiones.push(extension);
                });
            }
        },
        validarExtension: function (extensionAValidar) {
            var valido = false;
            var componentesExtensionAValidar = extensionAValidar.split('/');
            if (componentesExtensionAValidar.length == 2) {
                if (ds.arregloExtensiones.length > 0) {

                    _.each(ds.arregloExtensiones, function (extension) {
                        var componenteExtensionValida = extension.split('/');                        
                        if (componentesExtensionAValidar[0] === componenteExtensionValida[0]) {
                            if (componenteExtensionValida[1] == "*") {                                
                                valido = true;
                                return false;
                            }
                            else if (componentesExtensionAValidar[1] === componenteExtensionValida[1]) {                                
                                valido = true;
                                return false;
                            }
                        }

                    });

                }
            }
            //console.log("resultado final: valido: "+true);
            return valido;
        },
        validarExtensionArchivo: function (extensionAValidar) {
            var valido = false;
            if (ds.arregloExtensiones.length > 0) {                
                _.each(ds.arregloExtensiones, function (extension) {
                 
                    if (extensionAValidar === extension) {
                        valido = true;
                 
                        return false;
                    }
                 
                });
            }            
            return valido;
        },
        asignarTamanioArchivo: function (_tamanio) {
            var tamanio = isNaN(_tamanio) ? 0 : parseFloat(+_tamanio);
            ds.tamanioArchivo = tamanio * 1048576;
        },
        validarTamanioArchivo: function (_tamanioArchivo) {
            return ds.tamanioArchivo >= _tamanioArchivo;
        },
        asignarArchivoRequerido: function (_archivoRequerido) {
            ds.archivoRequerido = _archivoRequerido;
        },
        esArchivoRequerido: function () {
            return ds.archivoRequerido;
        },
        urlService: _urlService,
        asignarUrl: function (_urlService) {
            ds.urlService = rootDir + _urlService;
        },
        urlServicioImagen: _urlImagenServicio,
        asignarUrlServicioImagen: function (_urlImagenServicio) {
            ds.urlServicioImagen = rootDir + _urlImagenServicio;
        },
        urlServicioArchivo: _urlArchivoServicio,
        asignarUrlServicioArchivo: function (_urlArchivoServicio) {
            ds.urlServicioArchivo = rootDir + _urlArchivoServicio;
        }

    };

    _.bindAll(ds, 'del', 'save', 'asignarUrl', 'get',
        'asignarUrlServicioImagen', 'saveImage', 'saveFile', 'asignarUrlServicioArchivo',
        'asignarExtensionesValidas', 'validarExtension', 'validarExtensionArchivo', 'asignarTamanioArchivo',
        'validarTamanioArchivo', 'asignarArchivoRequerido', 'esArchivoRequerido');

    return {
        save: ds.save,
        del: ds.del,
        get: ds.get,
        saveImage: ds.saveImage,
        saveFile: ds.saveFile,
        asignarUrl: ds.asignarUrl,
        asignarUrlServicioImagen: ds.asignarUrlServicioImagen,
        asignarUrlServicioArchivo: ds.asignarUrlServicioArchivo,
        asignarExtensionesValidas: ds.asignarExtensionesValidas,
        validarExtension: ds.validarExtension,
        validarExtensionArchivo: ds.validarExtensionArchivo,
        asignarTamanioArchivo: ds.asignarTamanioArchivo,
        validarTamanioArchivo: ds.validarTamanioArchivo,
        asignarArchivoRequerido: ds.asignarArchivoRequerido,
        esArchivoRequerido: ds.esArchivoRequerido
    }

})();
