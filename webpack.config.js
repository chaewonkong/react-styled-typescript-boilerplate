const webpack = require("webpack");
const join = require("path").join;

const pathJoin = (path) => join(__dirname, path);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const dotenv = require("dotenv");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// eslint-disable-next-line
module.exports = (env, argv) => {
  require("dotenv-expand")(dotenv.config());
  const raw = Object.keys(process.env).reduce(
    (env, key) => {
      env[key] = process.env[key];

      return env;
    },
    {
      NODE_ENV: process.env.NODE_ENV || "development",
    }
  );

  const stringifiedENV = {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);

      return env;
    }, {}),
  };

  const TIMESTAMP = new Date().getTime().toString();

  return {
    entry: pathJoin("src/index.tsx"),
    resolve: {
      alias: {
        "@": pathJoin("src"),
      },
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devServer: {
      port: 3000,
      contentBase: pathJoin("build"),
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          include: pathJoin("public"),
          loaders: ["pug-loader"],
        },
        {
          test: /\.(ts|tsx)?$/,
          exclude: /(node_modules|__test__)/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: ["file-loader"],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: `[name].${TIMESTAMP}.bundle.js`,
      chunkFilename: `[name].${TIMESTAMP}.bundle.js`,
      path: pathJoin("build"),
      publicPath: "/",
    },
    plugins: [
      new CleanWebpackPlugin(),
      // new BundleAnalyzerPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            filter: async (resourcePath) => {
              if (resourcePath.toString().includes("index.pug")) {
                return false;
              }

              return true;
            },
            force: true,
          },
        ],
      }),
      new webpack.DefinePlugin(stringifiedENV),
      new CompressionWebpackPlugin({
        test: new RegExp(
          `\\.(${["js", "ts", "css", "pcss", "html"].join("|")})$`
        ),
        filename: "[path].gz[query]",
        algorithm: "gzip",
        threshold: 8192,
        cache: true,
      }),
      new HtmlWebpackPlugin({
        template: pathJoin("public/index.pug"),
        filename: "index.html",
      }),
      new HtmlWebpackPugPlugin(),
    ],
    optimization: {
      usedExports: true,
      minimize: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "initial",
          },
        },
      },
    },
  };
};
