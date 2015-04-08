using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JJApp.Models.Interfaces
{
    public interface IObjetoConEstado
    {
        ObjetoConEstado ObjetoConEstado { get; set; }
    }


    public enum ObjetoConEstado{
        SinModificar=0,
        Agregado=1,
        Modificado=2,
        Eliminado=3
    }

}
