using Newtonsoft.Json.Linq;
using System.Linq;
using System.Net.Http;
using System.Web.Http.Filters;
using System.Web.Http.Controllers;
using System.Net;

namespace JJApp.MVC.Filters
{
    public class ValidationActionFilter:ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext contexto)
        {
            var modelState = contexto.ModelState;
            if (!modelState.IsValid)
            {
                var errores = new JObject();
                foreach (var key in modelState.Keys)
                {
                    var state = modelState[key];
                    if (state.Errors.Any())
                    {
                        errores[key] = state.Errors.First().ErrorMessage;
                    }
                }
                contexto.Response = contexto.Request
                                    .CreateResponse<JObject>(HttpStatusCode.BadRequest, errores);

            }

            //base.OnActionExecuting(actionContext);
        }
        

    }
}