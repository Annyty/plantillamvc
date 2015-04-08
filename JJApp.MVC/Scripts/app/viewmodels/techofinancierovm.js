(function (simverApp) {

    function ModeloDatos(data) {
        var self = this;
        self.ambito = {};
        //console.log(data);
        //self.modelo = new simverApp.TechoFinanciero(data.modelo, self);
        self.modelo = new simverApp.TechoFinanciero(data.modelo, self);
        self.ambito.tiposFondo = ko.observableArray(data.tiposFondo);
        self.ambito.tipoFondoSeleccionado = ko.observable();
        
        self.ambito.fondos = ko.computed(function () {
            console.log("Entro al computed fondos");
            console.log(self.ambito.tipoFondoSeleccionado());
            return self.ambito.tipoFondoSeleccionado() ? self.ambito.tipoFondoSeleccionado().fondos : null;
        });
        self.ambito.fondoSeleccionado = ko.observable();
        self.ambito.fondoSeleccionado.subscribe(function (fondoSeleccionado) {
            console.log("Entro al subscribe de fondo seleccionado");            
            console.log(fondoSeleccionado);            
            self.modelo.fondoId(fondoSeleccionado ? fondoSeleccionado.id : undefined);
            console.log(self.modelo.fondoId());
        });
        
    }

    funMunDataService.asignarUrl('api/TechoFinancieroAPI/');        
    funMunDataService.asignarUrlServicioArchivo('TechoFinanciero/CargarArchivo');
    funMunDataService.asignarTamanioArchivo(3);
    funMunDataService.asignarArchivoRequerido(false);
    funMunDataService.asignarExtensionesValidas('image/*', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

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