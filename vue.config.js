const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
        config.output.filename = 'js/[name].[chunkhash:8]].js';
    }
},
});