using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(fintech.Web.Startup))]
namespace fintech.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
