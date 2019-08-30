using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;

namespace AzureBattleground.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var fileProvider = new PhysicalFileProvider(Directory.GetCurrentDirectory());

            DefaultFilesOptions options = new DefaultFilesOptions()
            {
                RequestPath = "",
                FileProvider = fileProvider,  
                DefaultFileNames = new List<string> { "index.html" },
            };
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("/index.html");
            app.UseDefaultFiles(options);

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                RequestPath = "",
                FileProvider = fileProvider,
            });
        }
    }
}
