using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace JJApp.MVC
{
    public class Config
    {
        
        public static string NombreCadenaConexion
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreCadenaConexion"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreCadenaConexion"].ToString();
                }

                return "DefaultConnection";

            }
        }

        public static string NombreTablaUsuarios
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreTablaUsuarios"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreTablaUsuarios"].ToString();
                }

                return "User";

            }

        }


        public static string NombreColumnaClavePrimariaTablaUsuarios
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreColumnaClavePrimariaTablaUsuarios"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreColumnaClavePrimariaTablaUsuarios"].ToString();
                }

                return "Id";
            }
        }


        public static string NombreColumnaUsuario
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreColumnaUsuario"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreColumnaUsuario"].ToString();
                }

                return "NombreUsuario";
            }
        }

        
        

        public static string ImagesUrlPrefix
        {
            get
            {
                return Config.ImagesFolderPath.Replace("~/", "");
            }
        }

        public static string ImagesFolderPath
        {
            get
            {
                if (ConfigurationManager.AppSettings["ImagesFolderPath"] != null)
                {
                    return ConfigurationManager.AppSettings["ImagesFolderPath"].ToString();
                }
                return "~/images";
            }
        }



        public static int RegistrosPorPagina
        {
            get
            {
                if (ConfigurationManager.AppSettings["RegistrosPorPagina"] != null)
                {
                    return int.Parse(ConfigurationManager.AppSettings["RegistrosPorPagina"].ToString());
                }
                return 10;
            }
        }
        public static int NumeroCaracteresNombreArchivo
        {
            get
            {
                if (ConfigurationManager.AppSettings["NumeroCaracteresNombreArchivo"] != null)
                {
                    return int.Parse(ConfigurationManager.AppSettings["NumeroCaracteresNombreArchivo"].ToString());
                }
                return 15;
            }
        }
        
        

    }
}