using Newtonsoft.Json.Serialization;
using JJApp.MVC.Filters;
using System.Web.Http;
using System.Web.Http.Validation.Providers;

namespace JJApp.MVC.App_Start
{
    public class CustomGlobalConfig
    {

        public static void Customize(HttpConfiguration config)
        {
            //Arregla el problema con la validación estricta del proveedor
            // http://bit.ly/19jjC6N y http://bit.ly/130EqfT
            config.Services.RemoveAll(
                typeof(System.Web.Http.Validation.ModelValidatorProvider),
                v => v is InvalidModelValidatorProvider);

            //enfoque tomado via @encosia en http://bit.ly/10EEHlQ
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            //enfoque tomado via @John_Papa en http://jpapa.me/NqC2HH
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();

            config.Filters.Add(new ValidationActionFilter());

        }

    }
}