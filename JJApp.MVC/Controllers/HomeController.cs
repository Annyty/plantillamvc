using JJApp.Models;
using Spire.Doc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace JJApp.MVC.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            
            string usuario = HttpContext.User.Identity.Name;

            if (HttpContext.User.IsInRole("Invitado"))
            {
                return RedirectToAction("Index", "Invitado", new { area = "" });            
            }                
            //else if (HttpContext.User.IsInRole("SupervisorSocialOrfis"))
            //{
            //    return RedirectToAction("Index", "SupervisorSocialOrfis", new { area = "" });
            //}
            else
            {
                return RedirectToAction("Login", "Account", new { area = "" });
            }

                      
        }
        
        [HttpGet]
        public ActionResult KeepAlive()
        {
            return new ContentResult { Content = "OK", ContentType = "text/plain" };
        }
        
    }
}
