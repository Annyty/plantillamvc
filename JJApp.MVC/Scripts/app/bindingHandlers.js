(function () {
    ko.bindingHandlers.typeahead = {
        init: function (element, valueAccessor, allBindingsAccessor) {

            var options = ko.unwrap(valueAccessor()) || {},
                allBindings = allBindingsAccessor();
            $(element).typeahead(
                {
                    hint: true,
                    highlight: true
                },
                {
                    displayKey: 'value',
                    source: options.ttAdapter()
                });
        }
    };

    ko.bindingHandlers.fadeVisible = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var debeMostrarse = valueAccessor();
            $(element).toggle(debeMostrarse);
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var debeMostrarse = valueAccessor(),
                allBindings = allBindingsAccessor(),
                duracion = allBindings.fadeDuration || 500;
            debeMostrarse ? $(element).fadeIn(duracion) : $(element).fadeOut(duracion);
        }
    };

    ko.bindingHandlers.mostrarVentanaAgregar = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            $(element).on("click", function (event) {
                var ligarElemento = valueAccessor();
                //alert($(element).html());
                $tabla = $(element).parent().parent().parent().parent();
                $divVentana = $tabla.prev().prev();
                $divVentana.modal();
                $divVentana.find('input[type=text]')[0].select();
                event.preventDefault();
            });
        }
    };

    ko.bindingHandlers.enterKey = {
        init: function (el, valueAccessor, allBindings, data, context) {
            var wrapper = function (data, event) {
                if (event.keyCode === 13) {
                    valueAccessor().call(this, data, event);
                }
            }
            ko.applyBindingsToNode(el, { event: { keyup: wrapper } }, context);
        }
    };

    ko.bindingHandlers.alSeleccionar = {
        init: function (el, valueAccessor) {
            var valor = valueAccessor();
            $(el).click(function () {
                var nuevoValorNumerico = isNaN(valor()) ? 0 : parseFloat(+valor());
                if (nuevoValorNumerico === 0) {
                    $(el).select();
                }
            });
        }
    };


    var aMoneda = function (num) {
        return '$ ' + (num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    };

    var aNumeroFormateado = function (num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    };

    var aNumeroEnteroFormateado = function (num) {
        tokens = num.toFixed(0).replace('-', '').split('.');
        var resultado = $.map(tokens[0].split('').reverse(), function (elm, i) {
            return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
        }).reverse().join('');

        return num < 0 ? '-' + resultado : resultado;
    };

    var handler = function (element, valueAccessor, allBindings) {
        var $el = $(element);
        var method;
        // Gives us the real value if it is a computed observable or not
        var valueUnwrapped = ko.unwrap(valueAccessor());
        if ($el.is(':input')) {
            method = 'val';
        } else {
            method = 'text';
        }
        return $el[method](aMoneda(valueUnwrapped));
    };

    var handlerNumeroFormateado = function (element, valueAccessor, allBindings) {
        var $el = $(element);
        var method;
        // Gives us the real value if it is a computed observable or not
        var valueUnwrapped = ko.unwrap(valueAccessor());
        if ($el.is(':input')) {
            method = 'val';
        } else {
            method = 'text';
        }
        return $el[method](aNumeroFormateado(valueUnwrapped));
    };

    var handlerNumeroEnteroFormateado = function (element, valueAccessor, allBindings) {
        var $el = $(element);
        var method;
        // Gives us the real value if it is a computed observable or not
        var valueUnwrapped = ko.unwrap(valueAccessor());
        if ($el.is(':input')) {
            method = 'val';
        } else {
            method = 'text';
        }
        return $el[method](aNumeroEnteroFormateado(valueUnwrapped));
    };


    ko.bindingHandlers.moneda = {
        update: handler
    };

    ko.bindingHandlers.numeroFormateado = {
        update: handlerNumeroFormateado
    };

    ko.bindingHandlers.numeroEnteroFormateado = {
        update: handlerNumeroEnteroFormateado
    };


    /**
     * Knockout binding handler for bootstrapSwitch indicating the status
     * of the switch (on/off): https://github.com/nostalgiaz/bootstrap-switch
     */
    ko.bindingHandlers.bootstrapSwitch = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            //initialize bootstrapSwitch
            $(element).bootstrapSwitch();

            // setting initial value
            $(element).bootstrapSwitch('state', valueAccessor()());

            //handle the field changing
            $(element).on('switchChange.bootstrapSwitch', function (event, state) {
                var observable = valueAccessor();
                observable(state);
            });

            // Adding component options
            var options = allBindingsAccessor().bootstrapSwitchOptions || {};
            for (var property in options) {
                $(element).bootstrapSwitch(property, ko.utils.unwrapObservable(options[property]));
            }

            //handle disposal (if KO removes by the template binding)
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).bootstrapSwitch("destroy");
            });

        },
        //update the control when the view model changes
        update: function (element, valueAccessor, allBindingsAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());

            // Adding component options
            var options = allBindingsAccessor().bootstrapSwitchOptions || {};
            for (var property in options) {
                $(element).bootstrapSwitch(property, ko.utils.unwrapObservable(options[property]));
            }

            $(element).bootstrapSwitch("state", value);
        }
    };


    ko.bindingHandlers.typeaheadChange = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var options = ko.unwrap(valueAccessor()) || {},
                $el = $(element),
                triggerChange = function () {
                    $el.change();
                }

            $el.typeahead({
                hint: true,
                highlight: true
            },
                {
                    displayKey: 'value',
                    source: options.ttAdapter()
                })
                .on("typeahead:selected", triggerChange)
                .on("typeahead:autocompleted", triggerChange);

            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $el.typeahead("destroy");
                $el = null;
            });
        }
    };


    ko.bindingHandlers.datepicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var options = allBindingsAccessor().datepickerOptions || {};
            //$(element).datepicker(options).on("changeDate", function (ev) {
            $(element).datepicker().on("changeDate", function (ev) {
                var observable = valueAccessor();
                observable(ev.date);
            });
        },
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            $(element).datepicker("setValue", value);
        }
    };


    ko.bindingHandlers.dateValue = {
        init: function (element, valueAccessor, allBindings) {
            var dpicker = $(element),
                triggerChange = function (evt) {
                    dpicker.change();
                };
            dpicker.datepicker()
            .on('changeDate', triggerChange);
        }
    };




    ko.bindingHandlers.typeaheadConParametros = {
        init: function (elementoJQuery, valueAccessor, allBindingsAccessor) {

            var options = ko.unwrap(valueAccessor()) || {},
                $elementoJQuery = $(elementoJQuery),
                observableConId = allBindingsAccessor.get('valor'),
                actualizarValores = function (elementoJQuery, datum) {
                    observableConId(datum.id);
                };

            $elementoJQuery.typeahead({
                hint: true,
                highlight: true
            },
                        {
                            displayKey: 'value',
                            source: options.ttAdapter()
                        })
                        .on("typeahead:selected", actualizarValores)
                        .on("typeahead:autocompleted", actualizarValores);

            ko.utils.domNodeDisposal.addDisposeCallback(elementoJQuery, function () {
                $elementoJQuery.typeahead("destroy");
                $elementoJQuery = null;
            });

        }

    };



    ko.bindingHandlers.typeaheadLocalidadPGI = {

        init: function (element, valueAccessor, allBindingsAccessor) {

            var $e = $(element),
                options = ko.unwrap(valueAccessor()) || {},
                localidadId = allBindingsAccessor.get('localidadId'),                
                gradoRezagoSocial = allBindingsAccessor.get('gradoRezagoSocial'),
                actualizarValores = function (el, datum) {
                    try {                        
                        var gradoRezagoSocialDatum = datum.gradoRezagoSocial;
                        gradoRezagoSocial(gradoRezagoSocialDatum);                        
                        localidadId(datum.id);                        
                    }
                    catch (err) {
                        console.log(err);
                        //var errorBox = $("#printError"),
                        //  d = new Date();
                        //errorBox.text(d.toTimeString('hh:mm:ss') + '\n' + errorBox.text() + err + '\n\n');
                    }
                };

            $e.typeahead({
                hint: true,
                highlight: true
            },
                {
                    displayKey: 'value',
                    source: options.ttAdapter()
                }).on('typeahead:selected', actualizarValores)
                .on('typeahead:autocompleted', actualizarValores);
        }
    };

}());