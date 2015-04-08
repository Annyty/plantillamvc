var obrasMunicipio = new Bloodhound({
    datumTokenizer: function (d) {
        return Bloodhound.tokenizers.whitespace(d.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 11,
    remote: {
        url: rootDir + 'ModificacionPresupuestal/ObtenerObrasModificacion?query=%QUERY',        
        filter: function (obras) {
            return $.map(obras, function (obra) {
                return {
                    id: obra.id,
                    value: obra.name,
                    descripcion: obra.descripcion,
                    fondo: obra.fondo
                };
            });
        }
    }
});

//Inicializamos el bloodhound engine
obrasMunicipio.initialize();

var localidadesMunicipio = new Bloodhound({
    datumTokenizer: function (d) {
        return Bloodhound.tokenizers.whitespace(d.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 11,
    remote: {        
        url: rootDir + 'ModificacionPresupuestal/ObtenerLocalidades?query=%QUERY',
        filter: function (localidades) {
            return $.map(localidades, function (localidad) {
                return {
                    id: localidad.id,
                    value: localidad.name                    
                };
            });
        }
    }
});

//Inicializamos el bloodhound engine
localidadesMunicipio.initialize();