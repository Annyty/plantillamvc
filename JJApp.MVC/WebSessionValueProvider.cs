using JJApp.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JJApp.MVC
{
    public class WebSessionValueProvider:ISessionValueProvider
    {

        private const string USUARIOID = "UsuarioId";
        private const string NOMBREUSUARIO = "NombreUsuario";
        private const string MUNICIPIOID = "MunicipioId";
        private const string NOMBREMUNICIPIO = "NombreMunicipio"; 
        private const string EJERCICIOID = "EjercicioId";
        private const string NOMBREEJERCICIO = "NombreEjercicio";
        
        //Datos de la sesión del usuario
        public int UsuarioId
        {
            get {
                try { 
                    return (int)HttpContext.Current.Session[USUARIOID]; 
                }
                catch (Exception ex)
                {
                    return -1;
                }
            }
            set { 
                HttpContext.Current.Session[USUARIOID] = value; 
            }
        }

        public string NombreUsuario
        {
            get
            {
                return (string)HttpContext.Current.Session[NOMBREUSUARIO]; 
            }
            set
            {
                HttpContext.Current.Session[NOMBREUSUARIO] = value; 
            }
        }


        //Datos de la sesión del municipio
        public int MunicipioId
        {
            get
            {
                try
                {
                    return (int)HttpContext.Current.Session[MUNICIPIOID];
                }
                catch (Exception ex)
                {
                    return -1;
                }
            }
            set
            {
                HttpContext.Current.Session[MUNICIPIOID] = value;
            }
        }

        public string NombreMunicipio
        {
            get
            {
                return (string)HttpContext.Current.Session[NOMBREMUNICIPIO];
            }
            set
            {
                HttpContext.Current.Session[NOMBREMUNICIPIO] = value;
            }
        }

        //Datos de la sesión del ejercicio
        public int EjercicioId
        {
            get
            {
                try
                {
                    return (int)HttpContext.Current.Session[EJERCICIOID];
                }
                catch (Exception ex)
                {
                    return -1;
                }
            }
            set
            {
                HttpContext.Current.Session[EJERCICIOID] = value;
            }
        }

        public string NombreEjercicio
        {
            get
            {
                return (string)HttpContext.Current.Session[NOMBREEJERCICIO];
            }
            set
            {
                HttpContext.Current.Session[NOMBREEJERCICIO] = value;
            }
        }




    }
}