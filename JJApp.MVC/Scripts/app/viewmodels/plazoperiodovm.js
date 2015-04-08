(function (simverApp) {
    

    function ModeloDatos(data) {
        var self = this;
        self.ambito = {};               
        self.modelo = new simverApp.PlazoPeriodo(data.modelo);
        self.ambito.ejercicios = ko.observableArray(data.ejercicios);
        self.ambito.periodos = ko.observableArray(data.periodos);
        self.ambito.ejercicioSeleccionado = ko.observable();
        self.ambito.periodoSeleccionado = ko.observable();
        self.ambito.ejercicioSeleccionado.subscribe(function (ejercicioSeleccionado) {
            self.ambito.periodos([]);            
            if (ejercicioSeleccionado != undefined && ejercicioSeleccionado != null) {
                self.modelo.ejercicioId(ejercicioSeleccionado.id);
                //simverApp.ServicioDatosPlazoPeriodo.obtenerPeriodos(ejercicioSeleccionado.id).
                simverApp.ServicioDatosPlazoPeriodo.obtenerPeriodos(ejercicioSeleccionado.id).done(function (response) {
                    self.ambito.periodos(response);                    
                }).fail(function () {
                    toastr.error("Error");
                });
            }
        });
        self.ambito.periodoSeleccionado.subscribe(function (periodoSeleccionado) {                        
            if (periodoSeleccionado != undefined && periodoSeleccionado != null) {
                self.modelo.periodoId(periodoSeleccionado.id);
            }
        });
        
    }

    funMunDataService.asignarUrl('api/PlazoPeriodoAPI/');    

    simverApp.ModeloDatos = new ModeloDatos(simverApp.data);

    simverApp.Inicializacion = function () {

        var htmlDataForm = $('#html-data-form')[0];

        H5F.setup([htmlDataForm], {

            validClass: "valid",
            invalidClass: "invalid",
            requiredClass: "required"

        });

        //var htmlDataForm = $('#html-data-form')[0];

        //if (vm != undefined) {
        //    console.log("vm está definido");
        //    vm.guardar = function () {
        //        var validationUtility = new ValidationUtility();

        //        if (validationUtility.validate('html-data-form')) {  
        //            vm.save();
        //        }
        //        else {
        //            toastr.error("La forma tiene errores");
        //        }




        //    };
        //}
        //else {
        //    console.log("vm no está definido");
        //}




        ////$.validator.addMethod("mayorId", function (value, element) {
        ////    //console.log(value);
        ////    ////console.log(element);
        ////    return value > 0;
        ////}, "Es necesario que el valor sea mayor a 0");

        //$("#html-data-form").validate({
        //    ignore: [],
        //    submitHandler: function () {
        //        toastr.success("Es válida la forma");
        //    },
        //    invalidHandler: function (event, validator) {
        //        toastr.error("Es necesario llenar los campos necesarios para poder agregar el formato.");
        //    },
        //    rules:{
        //        tipoFondoId: "required",
        //        fondoId:"required"
        //    }
        //  });

        //$("#html-data-form").validate({
        //    ignore: [],
        //    submitHandler: function () {
        //        //toastr.success("Es válida la forma");
        //        //alert("Es válida");
        //        //window.vm.save();
        //        //formatoViewModel.save();
        //        //try{
        //        //vm.save();
        //        //}
        //        //catch(ex){
        //        //    alert(ex);
        //        //}

        //        //event.preventDefault();
        //        toastr.success("La forma es válida, por lo que guardamos el programa de inversión.");
        //    },
        //    invalidHandler: function (event, validator) {
        //        toastr.error("Es necesario llenar los campos necesarios para poder agregar el formato.");
        //        /*
        //         // 'this' refers to the form
        //            var errors = validator.numberOfInvalids();
        //            if (errors) {
        //              var message = errors == 1
        //                ? 'You missed 1 field. It has been highlighted'
        //                : 'You missed ' + errors + ' fields. They have been highlighted';
        //              $("div.error span").html(message);
        //              $("div.error").show();
        //            } else {
        //              $("div.error").hide();
        //            }
        //        */
        //    }

        //    ,rules: {
        //        tipoFondoId: {
        //            required: true
        //        },
        //        fondoId: {
        //            required:true
        //        },
        //        cantidad: {
        //            required:true,
        //            min:1
        //        }
        //    },
        //    messages: {                
        //        cantidad: {                    
        //            min: "La cantidad del techo financiero debe ser mayor a 0"
        //        }
        //    }
        //});
    };

}(window.simverApp));