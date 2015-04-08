(function () {
    var formatear = function (valor,esDinero,aplicarDecimales) {
        
        var valorNumerico = isNaN(valor) ? 0 : parseFloat(+valor),
            tokens,resultado;
        
        if (aplicarDecimales) {

            tokens = valorNumerico.toFixed(2).replace('-', '').split('.');

            if (esDinero) {
                resultado = '$' + $.map(tokens[0].split('').reverse(), function (elm, i) {
                    return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
                }).reverse().join('') + '.' + tokens[1];
            }
            else {
                resultado = $.map(tokens[0].split('').reverse(), function (elm, i) {
                    return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
                }).reverse().join('') + '.' + tokens[1];
            }

        }
        else {

            tokens = valorNumerico.toFixed(0).replace('-', '').split('.');

            if (esDinero) {
                resultado = '$' + $.map(tokens[0].split('').reverse(), function (elm, i) {
                    return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
                }).reverse().join('') ;
            }
            else {
                resultado = $.map(tokens[0].split('').reverse(), function (elm, i) {
                    return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
                }).reverse().join('');
            }


        }
                  
        return valorNumerico < 0 ? '-' + resultado : resultado;

    };

    //var formatearNumero = function (valor) {

    //    var valorNumerico = isNaN(valor) ? 0 : parseFloat(+valor);

    //    tokens = valorNumerico.toFixed(2).replace('-', '').split('.');
    //    var resultado = $.map(tokens[0].split('').reverse(), function (elm, i) {
    //        return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
    //    }).reverse().join('') + '.' + tokens[1];

    //    return valorNumerico < 0 ? '-' + resultado : resultado;

    //};

    ko.subscribable.fn.numero = function () {
        var target = this;

        var writeTarget = function (valor) {            
            if (isNaN(valor)) {                
                var valorDividido = valor.replace(/[^0-9.-]/g, '');                
                target(parseFloat(valorDividido));
            }
            else{                
                target(parseFloat(valor));
            }
        };

        var resultado = ko.computed({
            read: function () {                
                if (isNaN(target()))
                {
                    target(null);                    
                }                
                return target();
            },
            write: writeTarget
        });

        resultado.formateadoDinero = ko.computed({
            read: function () {
                return formatear(target(),true,true);
            },
            write: writeTarget
        });

        resultado.formateadoNumerico = ko.computed({
            read: function () {
                return formatear(target(), false, true);
            },
            write: writeTarget
        });

        resultado.formateadoEntero = ko.computed({
            read: function () {
                return formatear(target(), false, false);
            },
            write: writeTarget
        });

        resultado.esNegativo = ko.computed(function () {
            return target() > 0;
        });

        return resultado;

    };

})();