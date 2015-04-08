using JJApp.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JJApp.Models
{    
    public class User:IAuditInfo
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Username { get; set; }        
        public string CorreoElectronico { get; set; }
        public ICollection<Role> Roles { get; set; }                
        public bool Activo { get; set; }
        public DateTime CreadoEn { get; set; }
        public DateTime ModificadoEn { get; set; }            
        public User()
        {
            this.Roles = new List<Role>();            
        }

        
    }
}
