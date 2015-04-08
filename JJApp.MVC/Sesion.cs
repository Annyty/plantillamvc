using JJApp.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JJApp.MVC
{
    public static class Sesion
    {
        private static ISessionValueProvider _sessionValueProvider;

        public static void SetSessionValueProvider(ISessionValueProvider provider)
        {
            _sessionValueProvider = provider;
        }

        public static int UsuarioId
        {
            get
            {
                return _sessionValueProvider.UsuarioId;
            }
            set
            {
                _sessionValueProvider.UsuarioId = value;
            }
        }
        public static string NombreUsuario
        {
            get
            {
                return _sessionValueProvider.NombreUsuario;
            }
            set
            {
                _sessionValueProvider.NombreUsuario = value;
            }
        }

        public static int MunicipioId
        {
            get
            {
                return _sessionValueProvider.MunicipioId;
            }
            set
            {
                _sessionValueProvider.MunicipioId = value;
            }
        }
        public static string NombreMunicipio
        {
            get
            {
                return _sessionValueProvider.NombreMunicipio;
            }
            set
            {
                _sessionValueProvider.NombreMunicipio = value;
            }
        }

        public static int EjercicioId
        {
            get
            {
                return _sessionValueProvider.EjercicioId;
            }
            set
            {
                _sessionValueProvider.EjercicioId = value;
            }
        }
        public static string NombreEjercicio
        {
            get
            {
                return _sessionValueProvider.NombreEjercicio;
            }
            set
            {
                _sessionValueProvider.NombreEjercicio = value;
            }
        }

    }
}