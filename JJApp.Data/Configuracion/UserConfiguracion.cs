using JJApp.Models;
using System.Data.Entity.ModelConfiguration;

namespace JJApp.Data.Configuracion
{
    public class UserConfiguracion:EntityTypeConfiguration<User>
    {
        public UserConfiguracion()
        {

            this.Property(u => u.Id)
                .HasColumnOrder(0);

            this.Property(u => u.Nombres)
                .IsOptional().HasMaxLength(200);

            this.Property(u => u.ApellidoPaterno)
                .IsOptional().HasMaxLength(100);

            this.Property(u => u.ApellidoMaterno)
                .IsOptional().HasMaxLength(100);

            this.Property(u => u.Username)
                .IsRequired().HasMaxLength(200);

            this.HasMany(r => r.Roles)
                .WithMany(u => u.Usuarios).Map(ur =>
                {

                    ur.MapLeftKey("UserId");
                    ur.MapRightKey("RoleId");
                    ur.ToTable("webpages_UsersInRoles");

                });


        }
    }
}
