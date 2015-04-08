var ValidationUtility = function () {

    var validationElements = $('[data-role="validate"]');

    validationElements.on('invalid', function () {        
        $('#' + this.id).parent().addClass('has-error');
    });


    var validate = function (formSelector) {
        
        $('.has-error').removeClass('has-error');        

        if (formSelector.indexOf('#') === -1) {
            formSelector = '#' + formSelector;
        }
        
        if ($(formSelector)[0].checkValidity() === false) {
            toastr.options = {"closeButton": true,"debug": false,"positionClass": "toast-top-full-width","onclick": null,"showDuration": "300","hideDuration": "1000","timeOut": "5000","extendedTimeOut": "1000","showEasing": "swing","hideEasing": "linear","showMethod": "fadeIn","hideMethod": "fadeOut"}
            toastr.error("Es necesario llenar los valores requeridos. ","Advertencia");
        }
        

        return $(formSelector)[0].checkValidity();


    };

    return {
        validate: validate
    };

};

