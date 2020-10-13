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
                args[0].title = 'ThunderQuote';
                return args;
            });
        }
}