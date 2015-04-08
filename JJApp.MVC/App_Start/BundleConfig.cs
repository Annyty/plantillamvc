using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Optimization;

namespace JJApp.MVC
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/site").Include(
                        "~/Scripts/lib/jquery-{version}.js",                                                                        
                        "~/Scripts/lib/bootstrap.js",
                        "~/Scripts/lib/knockout-{version}.js",
                        "~/Scripts/lib/bootstrap-switch.js",
                        "~/Scripts/app/ko-subscribables.js",                        
                        "~/Scripts/app/bindingHandlers.js",
                        "~/Scripts/app/ko-extenders.js",
                        "~/Scripts/lib/underscore.js",
                        "~/Scripts/lib/h5f.js",
                        "~/Scripts/lib/jquery.idletimeout.js",
                        "~/Scripts/lib/jquery.idletimer.js",                
                        "~/Scripts/lib/moment-with-langs.js",
                        "~/Scripts/lib/moment-datepicker.js",
                        "~/Scripts/lib/moment-datepicker-ko.js",
                        "~/Scripts/lib/_mixins.js",                        
                        "~/Scripts/lib/toastr.js",
                        "~/Scripts/app/servicioDatosGenerico.js",
                        "~/Scripts/app/offlineUtility.js",
                        "~/Scripts/app/validationUtility.js"                        
                        ));

            //Scripts a eliminar, offlineUtility, checar bien idletimeout,idletimer, si realmente funcionan
            //
            var bundleObra=new ScriptBundle("~/bundles/siteObra").Include(                        
                        "~/Scripts/lib/jquery-2.1.0.js",
                        "~/Scripts/lib/bootstrap.js",
                        "~/Scripts/lib/knockout-3.0.0.js",
                        "~/Scripts/app/ko-subscribables.js",
                        "~/Scripts/app/bindingHandlers.js",
                        "~/Scripts/app/ko-extenders.js",
                        "~/Scripts/lib/underscore.js",
                        "~/Scripts/lib/h5f.js",
                        "~/Scripts/lib/jquery.idletimeout.js",
                        "~/Scripts/lib/jquery.idletimer.js",
                        "~/Scripts/lib/moment-with-langs.js",
                        "~/Scripts/lib/moment-datepicker.js",
                        "~/Scripts/lib/moment-datepicker-ko.js",
                        "~/Scripts/lib/_mixins.js",
                        "~/Scripts/lib/toastr.js",
                        "~/Scripts/lib/jquery.validate.js",
                        "~/Scripts/lib/jquery.validate.messages_es.js",                        
                        "~/Scripts/lib/typeahead.jquery.js",
                        "~/Scripts/lib/bloodhound.js",                                               
                        "~/Scripts/lib/jquery-validate.bootstrap-tooltip.js",                                                
                        "~/Scripts/app/servicioDatosGenericoObra.js",
                        "~/Scripts/app/objetoconestado.js"              
                        );

            bundleObra.Orderer = new PassthruBundleOrderer();
            bundles.Add(bundleObra);

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/lib/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/lib/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/lib/jquery.unobtrusive*",
                        "~/Scripts/lib/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/lib/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/metro-bootstrap.css",
                "~/docs/font-awesome.css",                
                "~/Content/moment-datepicker/datepicker.css",
                "~/Content/toastr.css",
                //"~/Content/themes/base/jquery-ui.css",
                //"~/Content/metro-bootstrap.css",
                "~/Content/Site.css"
                ));

            bundles.Add(new StyleBundle("~/Content/estilosLogin").Include(
                "~/Content/EstilosLogin.css"                
                ));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            //Deshabilitamos la optimización de los archivos
            BundleTable.EnableOptimizations = false;
        }


        class PassthruBundleOrderer : IBundleOrderer
        {
            public IEnumerable<FileInfo> OrderFiles(BundleContext context, IEnumerable<FileInfo> files)
            {
                return files;
            }
        }

    }
}