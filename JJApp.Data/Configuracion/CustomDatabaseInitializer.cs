using JJApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace JJApp.Data.Configuracion
{
    public class CustomDatabaseInitializer :
        //CreateDatabaseIfNotExists<JJAppContext>
        DropCreateDatabaseIfModelChanges<JJAppContext>
    {

        protected override void Seed(JJAppContext context)
        {

            
            base.Seed(context);

        }


        //private void SeedMembership(JJAppContext context)
        //{
        //    WebSecurity.InitializeDatabaseConnection(JJAppContext.NombreCadenaConexion,JJAppContext.NombreTablaUsuarios,
        //        JJAppContext.NombreColumnaClavePrimariaTablaUsuarios,JJAppContext.NombreColumnaUsuario,autoCreateTables:true);

        //    var roles = (SimpleRoleProvider)Roles.Provider;
        //    var membership = (SimpleMembershipProvider)System.Web.Security.Membership.Provider;

        //    if (!roles.RoleExists("Admin"))
        //    {
        //        roles.CreateRole("Admin");
        //    }
        //    if (membership.GetUser("sallen", false) == null)
        //    {
        //        membership.CreateUserAndAccount("sallen", "imalittleteapot");
        //    }
        //    if (!roles.GetRolesForUser("sallen").Contains("Admin"))
        //    {
        //        roles.AddUsersToRoles(new[] { "sallen" }, new[] { "admin" });
        //    }

        //}



        //private void AgregarEjercicios(JJAppContext context)
        //{
        //    List<Ejercicio> ejercicios = new List<Ejercicio>()
        //    {
        //        new Ejercicio{
        //            Clave="EJERCICIO 2013",
        //            Nombre="EJERCICIO 2013",
        //            Anio=2013,
        //            FechaInicio=DateTime.Now.AddYears(-2),
        //            FechaTermino=DateTime.Now.AddYears(-2),                                       
        //        },
        //        new Ejercicio{
        //            Clave="EJERCICIO 2014",
        //            Nombre="EJERCICIO 2014",
        //            Anio=2014,
        //            FechaInicio=DateTime.Now.AddYears(-1),
        //            FechaTermino=DateTime.Now.AddYears(-1),                                       
        //        }
        //    };
        //    foreach (var ejercicio in ejercicios)
        //    {
        //        context.Ejercicios.Add(ejercicio);
        //    }

        //    context.SaveChanges();
        //}

    }
}
