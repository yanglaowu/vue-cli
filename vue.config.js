const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  configureWebpack: () => ({
    performance: {
      hints: false
    },
    plugins: [new HardSourceWebpackPlugin()]
  }),

  devServer: {
    host: "0.0.0.0",
    port: 8000
  }
};
