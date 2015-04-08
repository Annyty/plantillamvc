using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JJApp.Models;

namespace JJApp.Data.Configuracion
{
    public class OAuthMembershipConfiguracion:EntityTypeConfiguration<OAuthMembership>
    {
        public OAuthMembershipConfiguracion()
        {
            this.ToTable("webpages_OAuthMembership");

            this.HasKey(oa =>
            new {
                oa.Provider,
                oa.ProviderUserId
            });


            this.Property(oa => oa.Provider)
                .HasColumnType("nvarchar")
                .HasMaxLength(30).IsRequired();

            this.Property(oa => oa.ProviderUserId)
                .HasColumnType("nvarchar")
                .HasMaxLength(100).IsRequired();

            this.Property(oa => oa.UserId)
                .IsRequired();

        }
    }
}
