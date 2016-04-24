using System.Web.Optimization;

namespace fintech.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-route.js")
                .Include("~/Scripts/angular-mocks.js")
                );

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/Scripts/underscore.js")
                .Include("~/Scripts/app/app.js")
                .Include("~/Scripts/app/services/pollDataHttp.js")
                .Include("~/Scripts/app/services/userProfile.js")
                .Include("~/Scripts/app/index/indexCtrl.js")
                .Include("~/Scripts/app/index/directives/poll.js")
                .Include("~/Scripts/app/needs/needsCtrl.js")
                .Include("~/Scripts/app/needs/needDetailsCtrl.js")
                .Include("~/Scripts/app/referral/referralList.js")
                .Include("~/Scripts/app/referral/checkout.js")
                );

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/index/index.css",
                      "~/Content/needs/needs.css"
                      ));
        }
    }
}
