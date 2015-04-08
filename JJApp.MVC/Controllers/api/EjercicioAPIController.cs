using JJApp.Data;
using JJApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JJApp.MVC.Controllers.api
{
    public class EjercicioAPIController : ApiController
    {
        private JJAppUow _unit = new JJAppUow();

        //[HttpGet]

        //public IEnumerable<Ejercicio> Get()
        //{
        //    return this._unit.Ejercicios.ObtenerTodos();
        //}

        //[HttpGet]
        ////[System.Web.Http.Authorize(Roles = "admin,supervisor,funcionario")]
        //public Ejercicio Get(int id)
        //{
        //    Ejercicio ejercicio = this._unit.Ejercicios.ObtenerPorId(id);
        //    if (ejercicio == null)
        //    {
        //        throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
        //    }
        //    return ejercicio;

        //}


        ////Actualizamos el beneficiario
        ////[System.Web.Http.Authorize(Roles = "admin,supervisor,funcionario")]
        //public HttpResponseMessage Put(int id, Ejercicio ejercicio)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
        //    }

        //    if (id != ejercicio.Id)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.BadRequest);
        //    }

        //    Ejercicio ejercicioExistente = this._unit.Ejercicios.ObtenerPorId(id);

        //    _unit.Ejercicios.Detach(ejercicioExistente);


        //    //Mantenemos el valor original de //CreadoEn
        //    ejercicio.CreadoEn = ejercicioExistente.CreadoEn;


        //    this._unit.Ejercicios.Actualizar(ejercicio);

        //    try
        //    {
        //        this._unit.GuardarCambios();

        //        //Regresamos un valor explícito para evitar que la función de error de regreso
        //        //sea incorrectamente invocada
        //        return Request.CreateResponse(HttpStatusCode.OK, "{success:'true',verb:'PUT'}");
        //    }
        //    catch (DbUpdateConcurrencyException ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
        //    }
        //}


        ////Guardamos el beneficiario
        //[HttpPost]
        ////[System.Web.Http.Authorize(Roles = "admin,supervisor,funcionario")]
        //public HttpResponseMessage Post(Ejercicio ejercicio)
        //{
        //    try
        //    {
        //        if (ModelState.IsValid)
        //        {
        //            this._unit.Ejercicios.Agregar(ejercicio);
        //            this._unit.GuardarCambios();
        //            HttpResponseMessage resultado = Request.CreateResponse(HttpStatusCode.Created, ejercicio);
        //            resultado.Headers.Location =
        //                new Uri(Url.Link("DefaultApi", new { id = ejercicio.Id }));
        //            return resultado;
        //        }
        //        else
        //        {
        //            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
        //    }

        //}

        //[HttpDelete]
        ////[System.Web.Http.Authorize(Roles = "admin,supervisor")]
        //public HttpResponseMessage Delete(int id)
        //{
        //    Ejercicio ejercicio = this._unit.Ejercicios.ObtenerPorId(id);
        //    if (ejercicio == null)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.NotFound);
        //    }
        //    this._unit.Ejercicios.Eliminar(ejercicio);

        //    try
        //    {
        //        this._unit.GuardarCambios();
        //        return Request.CreateResponse(HttpStatusCode.OK, ejercicio);
        //    }
        //    catch (DbUpdateConcurrencyException ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
        //    }
        //}



    }
}
