var obrasMunicipio = new Bloodhound({
    datumTokenizer: function (d) {
        return Bloodhound.tokenizers.whitespace(d.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: rootDir + 'EjercidoTrimestre/ObtenerObras?query=%QUERY',
        filter: function (obras) {
            return $.map(obras, function (obra) {
                return {
                    id: obra.id,
                    value: obra.name
                };
            });
        }
    }
});

//Inicializamos el bloodhound engine
obrasMunicipio.initialize();

