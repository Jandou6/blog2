const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
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
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: [".ts", ".tsx", ".js", ".json", '.scss', '.css'],
    alias: {
      '@view': path.resolve(__dirname, './src/view'),
      '@compoment': path.resolve(__dirname, './src/compoment'),
    }
  },
  module: {
    rules: [

      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: 'css',
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: [!isProdEnv ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          !isProdEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]',
                context: path.resolve(__dirname, './src'),
              },
            },
          },
          // 'postcss-loader',
          'sass-loader',
        ],
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