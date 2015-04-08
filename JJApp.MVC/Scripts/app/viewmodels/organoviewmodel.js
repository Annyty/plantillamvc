var ModeloDatos = function (data) {
    var self=this;                       
    self.id = ko.observable(data.id);
    self.obraId=ko.observable(data.obraId);
    self.numeroObra = ko.observable(data.numeroObra);
    self.numeroObra.subscribe(function (nuevoValor) {
        var objeto = { "numeroObra": nuevoValor };
        $.ajax({
            type: 'GET',
            url: rootDir+'Organo/DatosObra',
            data: objeto,
            contentType: 'application/json',
            dataType: 'json',
            context: this,
            success: function (response) {
                console.log("Llamada ajax a organo/datosObra");
                console.log(response);
                //Realizar otra búsqueda a buscar el órgano de participación social de esa obra
                self.nombre(response[0].descripcion);
                self.localidad(response[0].localidad);
                self.obraId(response[0].id);

                $('#presidente').select();
            },
            error: function (response) {
                //toastr.error(response.statusText);
                ;
            }
        });
    },this);
    self.nombre = ko.observable(data.nombre);
    self.localidad = ko.observable(data.localidad);
    //self.municipioId = ko.observable("@JJApp.MVC.Sesion.MunicipioId");
    //self.usuarioAltaId = ko.observable("@JJApp.MVC.Sesion.UsuarioId");
    self.presidente = ko.observable(data.presidente);
    self.direccionPresidente = ko.observable(data.direccionPresidente);
    self.telefonoPresidente = ko.observable(data.telefonoPresidente);

    self.suplentePresidente = ko.observable(data.suplentePresidente);
    self.direccionSuplentePresidente = ko.observable(data.direccionSuplentePresidente);
    self.telefonoSuplentePresidente = ko.observable(data.telefonoSuplentePresidente);

    self.secretario = ko.observable(data.secretario);
    self.direccionSecretario = ko.observable(data.direccionSecretario);
    self.telefonoSecretario = ko.observable(data.telefonoSecretario);

    self.suplenteSecretario = ko.observable(data.suplenteSecretario);
    self.direccionSuplenteSecretario = ko.observable(data.direccionSuplenteSecretario);
    self.telefonoSuplenteSecretario = ko.observable(data.telefonoSuplenteSecretario);

    self.vocal = ko.observable(data.vocal);
    self.direccionVocal = ko.observable(data.direccionVocal);
    self.telefonoVocal = ko.observable(data.telefonoVocal);

    self.suplenteVocal = ko.observable(data.suplenteVocal);
    self.direccionSuplenteVocal = ko.observable(data.direccionSuplenteVocal);
    self.telefonoSuplenteVocal = ko.observable(data.telefonoSuplenteVocal);


    };