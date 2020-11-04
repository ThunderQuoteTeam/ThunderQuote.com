module.exports = {
    outputDir: "docs",
    assetsDir: "assetfiles",
    publicPath: './',

    //lintOnSave: false,
    css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "@/styles/_variables.scss";`
          }
        }
    },

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'ThunderQuote - Empowering organisations via digital transformation';
                args[0].description = 'ThunderQuote specialises in creating open, sector-wide IT infrastructure, websites and applications, delivering cost savings via automation and economies-of-scale for the non-profit and public sector.'
                return args;
            });
        },

    pluginOptions: {
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/'
        ],
        useRenderEvent: true,
        headless: true,
        onlyProduction: true
      }
    }
}
