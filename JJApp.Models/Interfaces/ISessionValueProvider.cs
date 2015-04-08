using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JJApp.Models.Interfaces
{
    public interface ISessionValueProvider
    {
        int UsuarioId { get; set; }
        string NombreUsuario { get; set; }

        int MunicipioId { get; set; }
        string NombreMunicipio { get; set; }

        int EjercicioId { get; set; }
        string NombreEjercicio { get; set; }

    }
}
