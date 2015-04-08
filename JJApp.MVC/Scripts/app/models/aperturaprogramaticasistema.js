(function (simverApp) {

    function AperturaProgramatica(data,padre) {        
        var self = this;
        self.id = ko.observable(data.id);
        self.clave = ko.observable(data.clave);
        self.nombre = ko.observable(data.nombre);
        self.claveNombre = ko.observable(data.claveNombre);
        self.aperturasProgramaticas = ko.observableArray(ko.utils.arrayMap(data.aperturasProgramaticas, function (data) {
            return new AperturaProgramatica(data,padre);
        }));
        self.hijoSeleccionado = ko.observable(undefined);
        self.hijoSeleccionado.subscribe(function (data) {

            padre.aperturaSeleccionada(data);

            if (data !== undefined) {                
                padre.numeroAperturasHijas(data.aperturasProgramaticas().length);
                if (data.aperturasProgramaticas().length === 0) {

                    var estructuraAperturaId = data.id();
                    simverApp.ServicioDatosEstructuraApertura.obtenerDatosTipologia(estructuraAperturaId).done(function (response) {

                        
                        if(response!==0){
                            padre.tieneTipologia(true);
                            padre.tipologia.validacion(response.Validacion);
                            padre.tipologia.estructuraAperturaId(response.EstructuraAperturaId);
                            padre.tipologia.estudioImpactoAmbiental(response.EstudioImpactoAmbiental);
                            padre.tipologia.factibilidad(response.Factibilidad);
                            padre.tipologia.fism(response.Fism);
                            padre.tipologia.obraAccion(response.ObraAccion);
                            padre.tipologia.otrasFuentes(response.OtrasFuentes);
                            padre.tipologia.validacion(response.Validacion);

                            padre.beneficiarios([]);
                            padre.beneficiarios(response.Beneficiarios);
                            padre.unidadesProyecto([]);
                            padre.unidadesProyecto(response.Unidades);

                            if (response.AperturaProgramaticaFism !== null) {                            
                                padre.tieneAperturaFism(true);
                                padre.aperturaProgramaticaFism.estructuraAperturaId(response.AperturaProgramaticaFism.EstructuraAperturaId);
                                padre.aperturaProgramaticaFism.clasificacionProyectoId(response.AperturaProgramaticaFism.ClasificacionProyectoId);
                                padre.aperturaProgramaticaFism.conceptoClasificacionProyecto(response.AperturaProgramaticaFism.ConceptoClasificacionProyecto);
                                padre.aperturaProgramaticaFism.subclasificacionProyectoId(response.AperturaProgramaticaFism.SubclasificacionProyectoId);
                                padre.aperturaProgramaticaFism.conceptoSubclasificacionProyecto(response.AperturaProgramaticaFism.ConceptoSubclasificacionProyecto);
                                padre.aperturaProgramaticaFism.modalidadProyectoId(response.AperturaProgramaticaFism.ModalidadProyectoId);
                                padre.aperturaProgramaticaFism.conceptoModalidadProyecto(response.AperturaProgramaticaFism.ConceptoModalidadProyecto);
                                padre.aperturaProgramaticaFism.contribucionProyectoId(response.AperturaProgramaticaFism.ContribucionProyectoId);
                                padre.aperturaProgramaticaFism.conceptoContribucionProyecto(response.AperturaProgramaticaFism.ConceptoContribucionProyecto);
                                padre.aperturaProgramaticaFism.tipoContribucionProyectoId(response.AperturaProgramaticaFism.TipoContribucionProyectoId);
                                padre.aperturaProgramaticaFism.conceptoTipoContribucionProyecto(response.AperturaProgramaticaFism.ConceptoTipoContribucionProyecto);
                                padre.aperturaProgramaticaFism.tipoProyectoId(response.AperturaProgramaticaFism.TipoProyectoId);
                                padre.aperturaProgramaticaFism.conceptoTipoProyecto(response.AperturaProgramaticaFism.ConceptoTipoProyecto);
                                padre.aperturaProgramaticaFism.programaFismId(response.AperturaProgramaticaFism.ProgramaFismId);
                                padre.aperturaProgramaticaFism.conceptoPrograma(response.AperturaProgramaticaFism.ConceptoPrograma);
                                padre.aperturaProgramaticaFism.consideraciones(response.AperturaProgramaticaFism.Consideraciones);
                            }
                            else {                            
                                padre.tieneAperturaFism(undefined);
                            }
                            toastr.success("Obtenemos la tipología adecuadamente");
                        }
                        else {
                            padre.tieneTipologia(undefined);
                            toastr.warning("Esta apertura todavía no tiene tipología");
                        }
                                                
                    })
                    .fail(function (error) {
                        toastr.error("Error: "+error);
                    });
                    

                }
            }
            
        });        
    }

    simverApp.AperturaProgramatica = AperturaProgramatica;

}(window.simverApp));