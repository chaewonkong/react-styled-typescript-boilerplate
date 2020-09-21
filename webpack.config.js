const webpack = require('webpack');
const join = require('path').join;

const pathJoin = path => join(__dirname, path);
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

// eslint-disable-next-line
module.exports = (env, argv) => ({
  entry: pathJoin('src/index.tsx'),
  resolve: {
    alias: {
      '@': pathJoin('src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    port: 3000,
    contentBase: pathJoin('build'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        include: pathJoin('public'),
        loaders: ['pug-loader'],
      },
      {
        test: /\.(ts|tsx|js)?$/,
        exclude: /(node_modules|__test__)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: pathJoin('build'),
    publicPath: '/',
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: new RegExp(`\\.(${['js', 'ts', 'css', 'pcss', 'html'].join('|')})$`),
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      threshold: 8192,
      cache: true,
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].bundle.css',
    //   chunkFilename: '[name].bundle.css',
    // }),
    new HtmlWebpackPlugin({
      template: pathJoin('./public/index.pug'),
      filename: 'index.html',
    }),
    new HtmlWebpackPugPlugin(),
    new webpack.DefinePlugin({
      COMMIT_SHA: JSON.stringify(process.env.COMMIT_SHA),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
      },
    },
  },
});
