const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

const SCR_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: `${SCR_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: `${SCR_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    // writeToDisk: true,
  },
};
