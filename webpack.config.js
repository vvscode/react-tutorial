const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");

const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
};

const prodConfig = {
  mode: "production",
};

module.exports = (env) => {
  const { NODE_ENV } = env;
  const isDev = NODE_ENV === "dev";

  const commonConfig = {
    entry: {
      index: path.resolve(__dirname, "src/index.ts"),
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new CleanWebpackPlugin(),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
  };

  const configENV = isDev ? devConfig : prodConfig;
  const config = merge(commonConfig, configENV);

  return config;
};
