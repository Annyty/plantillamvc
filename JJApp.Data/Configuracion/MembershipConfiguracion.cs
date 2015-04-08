using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JJApp.Models;

namespace JJApp.Data.Configuracion
{
    public class MembershipConfiguracion:EntityTypeConfiguration<Membership>
    {
        public MembershipConfiguracion()
        {

            this.ToTable("webpages_Membership");

            this.HasKey(m => m.UserId);

            this.Property(m => m.UserId)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(m => m.ConfirmationToken)
                .HasMaxLength(128).HasColumnType("nvarchar");

            this.Property(m => m.PasswordFailuresSinceLastSuccess)
                .IsRequired();

            this.Property(m => m.Password)
                .IsRequired().HasMaxLength(128).HasColumnType("nvarchar");

            this.Property(m => m.PasswordSalt)
                .IsRequired().HasMaxLength(128).HasColumnType("nvarchar");

            this.Property(m => m.PasswordVerificationToken)
                .HasMaxLength(128).HasColumnType("nvarchar");



        }
    }
}
