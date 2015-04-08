(function (simverApp) {

    function ModeloDatos(data) {
        var self = this;
        self.ambito = {};
        self.modelo = new simverApp.DatosFiscales(data);        
    }
    funMunDataService.asignarUrl('api/DatosFiscalesMunicipioAPI/');                
    simverApp.ModeloDatos = new ModeloDatos(simverApp.data);

    simverApp.Inicializacion = function () {

        var htmlDataForm = $('#html-data-form')[0];

        H5F.setup([htmlDataForm], {

            validClass: "valid",
            invalidClass: "invalid",
            requiredClass: "required"

        });
    };
}(window.simverApp));