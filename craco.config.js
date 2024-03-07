const path = require('path')
const CracoLessPlugin = require('craco-less');
const resolve = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  //less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  eslint: null,

  //webpack
  webpack: {
    alias: {
      "@" : resolve("src"),
      "components": resolve("src/components"),
      "routers": resolve("src/routers")
    }
  }
}