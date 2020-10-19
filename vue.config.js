const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

const plugins = [new HardSourceWebpackPlugin()];

const files = fs.readdirSync(path.resolve(__dirname, "./vendors"));
console.log("files: ", files);

files.forEach(file => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./vendors", file),
        publicPath: "/vendors/js",
        outputPath: "/vendors/js"
      })
    );
  }
  if (/.*\.dll.css/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./vendors", file),
        publicPath: "/vendors/css",
        outputPath: "/vendors/css",
        typeOfAsset: "css"
      })
    );
  }
  if (file === "fonts") {
    plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            context: path.resolve(__dirname, "./vendors", file),
            from: "*",
            to: "./vendors/fonts"
          }
        ]
      })
    );
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: path.resolve(__dirname, "./vendors", file)
      })
    );
  }
});

module.exports = {
  assetsDir: "assets",
  css: {
    sourceMap: process.env.NODE_ENV === "development"
  },
  configureWebpack: () => ({
    plugins: [...plugins]
  }),
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      // 设置 index.html的title
      args[0].title = pkg.description;
      return args;
    });
  },
  devServer: {
    host: "0.0.0.0",
    port: 8000
  }
};
