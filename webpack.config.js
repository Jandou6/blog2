const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY_PATH = path.resolve(__dirname, './src/page/index.tsx');
const OUTPUT_PATH = path.resolve(__dirname, './dist');

const isProdEnv = process.env.NODE_ENV === "production";


module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: OUTPUT_PATH,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", '.scss'],
    alias: {
      '@view': path.resolve(__dirname, './src/view'),
      '@compoment': path.resolve(__dirname, './src/compoment'),
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          }, {
            loader: "sass-loader"
          }],
      }
    ]
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    index: 'index.html',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    })
  ]
};