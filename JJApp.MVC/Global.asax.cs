using JJApp.Data;
using JJApp.MVC.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using WebMatrix.WebData;

namespace JJApp.MVC
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {

            JJAppContext contexto = new JJAppContext();
            contexto.Database.Initialize(true);

            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AuthConfig.RegisterAuth();

            CustomGlobalConfig.Customize(GlobalConfiguration.Configuration);

            Sesion.SetSessionValueProvider(new WebSessionValueProvider());

            //SeedMembership();

        }

        //private void SeedMembership()
        //{
        //    var roles = (SimpleRoleProvider)Roles.Provider;
        //    var membership = (SimpleMembershipProvider)System.Web.Security.Membership.Provider;

        //    if (!roles.RoleExists("Capturista"))
        //    {
        //        roles.CreateRole("Capturista");

        //        if (membership.GetUser("usuariocapturista", false) == null)
        //        {
        //            membership.CreateUserAndAccount("usuariocapturista", "capturista");
        //        }


        //        if (!roles.GetRolesForUser("usuariocapturista").Contains("Capturista"))
        //        {
        //            roles.AddUsersToRoles(new[] { "usuariocapturista" }, new[] { "Capturista" });
        //        }
        //    }


        //    if (!roles.RoleExists("SupervisorBancoInformacion"))
        //    {
        //        roles.CreateRole("SupervisorBancoInformacion");

        //        if (membership.GetUser("rpozos", false) == null)
        //        {
        //            membership.CreateUserAndAccount("rpozos", "pozos123456");
        //        }

        //        if (!roles.GetRolesForUser("rpozos").Contains("SupervisorBancoInformacion"))
        //        {
        //            roles.AddUsersToRoles(new[] { "rpozos" }, new[] { "SupervisorBancoInformacion" });
        //        }
        //    }


        //    if (!roles.RoleExists("FuncionarioFinanciero"))
        //    {

        //        roles.CreateRole("FuncionarioFinanciero");

        //        if (!roles.RoleExists("FuncionarioTecnico"))
        //        {
        //            roles.CreateRole("FuncionarioTecnico");
        //        }

        //        if (!roles.RoleExists("FuncionarioSocial"))
        //        {
        //            roles.CreateRole("FuncionarioSocial");
        //        }

        //        if (!roles.RoleExists("FuncionarioSupervisor"))
        //        {
        //            roles.CreateRole("FuncionarioSupervisor");
        //        }

        //        ///////////////////////////Creo los usuarios////////////////////////////
        //        if (membership.GetUser("usuariofinanciero", false) == null)
        //        {
        //            membership.CreateUserAndAccount("usuariofinanciero", "financiero");
        //        }

        //        if (membership.GetUser("usuariotecnico", false) == null)
        //        {
        //            membership.CreateUserAndAccount("usuariotecnico", "tecnico");
        //        }

        //        if (membership.GetUser("usuariosocial", false) == null)
        //        {
        //            membership.CreateUserAndAccount("usuariosocial", "social");
        //        }

        //        if (membership.GetUser("usuariosupervisor", false) == null)
        //        {
        //            membership.CreateUserAndAccount("usuariosupervisor", "supervisor");
        //        }


        //        //4

        //        ///////////////////////////Creo los usuarios////////////////////////////

        //        if (!roles.GetRolesForUser("usuariofinanciero").Contains("FuncionarioFinanciero"))
        //        {
        //            roles.AddUsersToRoles(new[] { "usuariofinanciero" }, new[] { "FuncionarioFinanciero" });
        //        }

        //        if (!roles.GetRolesForUser("usuariotecnico").Contains("FuncionarioTecnico"))
        //        {
        //            roles.AddUsersToRoles(new[] { "usuariotecnico" }, new[] { "FuncionarioTecnico" });
        //        }

        //        if (!roles.GetRolesForUser("usuariosocial").Contains("FuncionarioSocial"))
        //        {
        //            roles.AddUsersToRoles(new[] { "usuariosocial" }, new[] { "FuncionarioSocial" });
        //        }

        //        if (!roles.GetRolesForUser("usuariosupervisor").Contains("FuncionarioSupervisor"))
        //        {
        //            roles.AddUsersToRoles(new[] { "usuariosupervisor" }, new[] { "FuncionarioSupervisor" });
        //        }




        //        using (JJAppUow _unit = new JJAppUow())
        //        {


        //            var municipio = _unit.Municipios.ObtenerTodos()
        //                .Where(u => u.Nombre == "ORIZABA").FirstOrDefault();
        //            var usuarioFinanciero=_unit.Usuarios.ObtenerTodos()
        //                .Where(u => u.Username == "usuariofinanciero").FirstOrDefault();
        //            var usuarioTecnico = _unit.Usuarios.ObtenerTodos()
        //                .Where(u => u.Username == "usuariotecnico").FirstOrDefault();
        //            var usuarioSocial = _unit.Usuarios.ObtenerTodos()
        //                .Where(u => u.Username == "usuariosocial").FirstOrDefault();
        //            var usuarioSupervisor = _unit.Usuarios.ObtenerTodos()
        //                .Where(u => u.Username == "usuariosupervisor").FirstOrDefault();

        //            usuarioFinanciero.MunicipioId = municipio.Id;
        //            usuarioTecnico.MunicipioId = municipio.Id;
        //            usuarioSupervisor.MunicipioId = municipio.Id;
        //            usuarioSocial.MunicipioId = municipio.Id;

        //            try 
        //            { 
        //                _unit.GuardarCambios();
        //            }
        //            catch (Exception ex)
        //            {
        //                string error = ex.Message;
        //            }

        //        }
        //    }
            
        //}


    }
}