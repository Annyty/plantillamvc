using JJApp.Data;
using JJApp.Models;
using JJApp.Models.Interfaces;
using JJApp.MVC.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JJApp.MVC.Helpers
{
    public static class UtileriasConversionModelos
    {

        //internal static PlazoPeriodoModeloCliente CrearPlazoPeriodoVMDesdeModelo(PlazoPeriodo plazoPeriodo)
        //{

        //    PlazoPeriodoModeloCliente plazoPeriodoVM = new PlazoPeriodoModeloCliente();
        //    plazoPeriodoVM.Id = plazoPeriodo.Id;
        //    plazoPeriodoVM.EjercicioId = plazoPeriodo.EjercicioId;
        //    plazoPeriodoVM.Ejercicio = plazoPeriodo.Ejercicio.Nombre;
        //    plazoPeriodoVM.PeriodoId = plazoPeriodo.PeriodoId;
        //    plazoPeriodoVM.Periodo = plazoPeriodo.Periodo.Nombre;
        //    plazoPeriodoVM.FechaInicio = plazoPeriodo.FechaInicio;
        //    plazoPeriodoVM.FechaTermino = plazoPeriodo.FechaTermino;
        //    plazoPeriodoVM.Mensaje = plazoPeriodo.MensajePlazoFechaTermino;            
        //    return plazoPeriodoVM;

        //}

        //internal static PlazoPeriodo CrearPlazoPeriodoDesdeModeloCliente(PlazoPeriodoModeloCliente plazoPeriodoVM)
        //{
        //    PlazoPeriodo plazoPeriodo = new PlazoPeriodo();
        //    plazoPeriodo.EjercicioId = plazoPeriodoVM.EjercicioId;
        //    plazoPeriodo.FechaInicio = plazoPeriodoVM.FechaInicio;
        //    plazoPeriodo.FechaTermino = plazoPeriodoVM.FechaTermino;
        //    plazoPeriodo.Id = plazoPeriodoVM.Id;
        //    plazoPeriodo.MensajePlazoFechaTermino = plazoPeriodoVM.Mensaje;
        //    plazoPeriodo.PeriodoId = plazoPeriodoVM.PeriodoId;
        //    return plazoPeriodo;
        //}


        //internal static PlazoPeriodo CrearPlazoPeriodoDesdeVM(PlazoPeriodoModeloCliente plazoPeriodoVM, PlazoPeriodo plazoExistente)
        //{
        //    PlazoPeriodo plazoPeriodo = new PlazoPeriodo();
        //    plazoPeriodo.EjercicioId = plazoPeriodoVM.EjercicioId;
        //    plazoPeriodo.FechaInicio = plazoPeriodoVM.FechaInicio;
        //    plazoPeriodo.FechaTermino = plazoPeriodoVM.FechaTermino;
        //    plazoPeriodo.Id = plazoPeriodoVM.Id;
        //    plazoPeriodo.MensajePlazoFechaTermino = plazoPeriodoVM.Mensaje;
        //    plazoPeriodo.PeriodoId = plazoPeriodoVM.PeriodoId;
        //    plazoPeriodo.CreadoEn = plazoExistente.CreadoEn;
        //    plazoPeriodo.Activo = plazoExistente.Activo;
        //    plazoPeriodo.ModificadoEn = plazoExistente.ModificadoEn;
        //    return plazoPeriodo;
        //}
    }
}