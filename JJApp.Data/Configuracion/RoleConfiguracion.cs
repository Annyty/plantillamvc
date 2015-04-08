using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JJApp.Models;

namespace JJApp.Data.Configuracion
{
    
    public class RoleConfiguracion:EntityTypeConfiguration<Role>
    {
        public RoleConfiguracion()
        {

            this.ToTable("webpages_Roles");

            this.Property(r => r.RoleName)
                .HasMaxLength(256).IsRequired();

        }

    }
}
