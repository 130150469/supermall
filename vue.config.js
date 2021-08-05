module.exports = {
    publicPath: './',
    outputDir:'../learn-cordova/www',
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "network":"@/network",
                "common":"@/common",
                "views":"@/views",
                "components":"@/components",
            }
        }
    }
}