using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JJApp.MVC.ViewModels
{
    public class GenericoViewModel<T>:ViewModelBase
    {
        public T modelo { get; set; }
        public string ModeloJSON
        {
            get
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();

                settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                var _modelo = JsonConvert.SerializeObject(this.modelo, settings);

                return _modelo;
            }
        }
        
    }
}