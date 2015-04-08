using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.IO;
using JJApp.Models;
using JJApp.MVC.ViewModels;
using Spire.Doc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using JJApp.Data;



namespace JJApp.MVC
{
    public static class Utilerias
    {

        public static string QuitarEspaciosCadena(string cadena){
            return cadena.Replace(" ", String.Empty);
        }

        public static string RecortarCadena(string cadena, int numeroCaracteres)
        {
            if (cadena.Length >= numeroCaracteres)
            {
                return cadena.Substring(0, numeroCaracteres);
            }
            else
            {
                return QuitarEspaciosCadena(cadena);
            }
        }


        public static string ObtenerNombreArchivo(string nombre)
        {
            return RecortarCadena(nombre, Config.NumeroCaracteresNombreArchivo);
        }



        public static string SerializarObjetoAJSON<T>(T objeto)
        {
            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            var objetoSerializado = JsonConvert.SerializeObject(objeto, settings);
            return objetoSerializado;
        }
        public static int Pixel2MTU(int pixeles)
        {
            int mtus = pixeles * 9525;
     
            return mtus;
        }


        




    }
}