using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JJApp.Models.Interfaces
{
    public interface IAuditInfo
    {
        bool Activo { get; set; }
        DateTime CreadoEn { get; set; }
        DateTime ModificadoEn { get; set; }
    }
}
