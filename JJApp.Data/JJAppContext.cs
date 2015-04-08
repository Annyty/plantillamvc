using JJApp.Data.Configuracion;
using JJApp.Models;
using JJApp.Models.Interfaces;
using System;
using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;

namespace JJApp.Data
{
    public class JJAppContext:DbContext
    {
        
        public DbSet<User> Usuarios { get; set; }
        public DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
                
            //Configuración de las tablas de SimpleSecurity de ASP.NET
            modelBuilder.Configurations.Add(new UserConfiguracion());        
            modelBuilder.Configurations.Add(new RoleConfiguracion());
            modelBuilder.Configurations.Add(new OAuthMembershipConfiguracion());
            modelBuilder.Configurations.Add(new MembershipConfiguracion());
            

            //base.OnModelCreating(modelBuilder);
        }

        public static string NombreCadenaConexion
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreCadenaConexion"] != null)
                {
                    return ConfigurationManager.AppSettings["NombreCadenaConexion"].ToString();
                }
                return "DefaultConnection";
            }    
        }



        public static string NombreTablaUsuarios
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreTablaUsuarios"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreTablaUsuarios"].ToString();
                }

                return "User";

            }

        }


        public static string NombreColumnaClavePrimariaTablaUsuarios
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreColumnaClavePrimariaTablaUsuarios"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreColumnaClavePrimariaTablaUsuarios"].ToString();
                }

                return "Id";
            }
        }


        public static string NombreColumnaUsuario
        {
            get
            {
                if (ConfigurationManager.AppSettings["NombreColumnaUsuario"] != null)
                {

                    return ConfigurationManager.AppSettings["NombreColumnaUsuario"].ToString();
                }

                return "NombreUsuario";
            }
        }


        static JJAppContext()
        {
            Database.SetInitializer(new CustomDatabaseInitializer());
            //Mapea a la base de datos cuando se hacen cambios directos
            //y no se usa code first.
            //Database.SetInitializer<JJAppContext>(null);
        }

        public JJAppContext():base(nameOrConnectionString:JJAppContext.NombreCadenaConexion)
        {
            
        }
        private void AplicarReglas()
        {
            foreach (var entrada in this.ChangeTracker.Entries()
                        .Where(
                        e=>e.Entity is IAuditInfo && 
                        ((e.State==EntityState.Added)||
                        (e.State==EntityState.Modified))))
            {

                IAuditInfo e = (IAuditInfo) entrada.Entity;

                if (entrada.State == EntityState.Added)
                {
                    e.CreadoEn = DateTime.Now;
                    e.Activo = true;
                }

                e.ModificadoEn = DateTime.Now;


            }
        }


        public static EntityState ConvertirEstado(ObjetoConEstado objetoConEstado)
        {
            switch (objetoConEstado)
            {
                case ObjetoConEstado.Agregado:
                    return EntityState.Added;
                case ObjetoConEstado.Modificado:
                    return EntityState.Modified;
                case ObjetoConEstado.Eliminado:
                    return EntityState.Deleted;
                default:
                    return EntityState.Unchanged;
            }
        }

        internal void AplicarCambiosEstado()
        {

            foreach (var entry in this.ChangeTracker.Entries<IObjetoConEstado>())
            {
                IObjetoConEstado stateInfo = entry.Entity;
                entry.State = ConvertirEstado(stateInfo.ObjetoConEstado);
            }
        }

        public override int SaveChanges()
        {
            this.AplicarReglas();
            return base.SaveChanges();
        }

    }
}
