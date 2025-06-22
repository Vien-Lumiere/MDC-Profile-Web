const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Tambahkan ini
const fs = require('fs');

// Generate konfigurasi otomatis
const generateConfig = () => {
  const pagesDir = path.resolve(__dirname, 'public/page/Art-wall');
  const scriptsDir = path.resolve(__dirname, 'src/script/Art-wall');
  const stylesDir = path.resolve(__dirname, 'src/Style/Art-wall');

  const htmlFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.html'));
  
  return htmlFiles.map(htmlFile => {
    const name = htmlFile.replace('.html', '');
    const jsFile = fs.existsSync(path.join(scriptsDir, `JS_${name}_script.js`)) 
      ? `JS_${name}_script.js`
      : null;
    
    const cssFile = fs.existsSync(path.join(stylesDir, `${name}_style.css`))
      ? `${name}_style.css`
      : null;

    return {
      name,
      template: path.join(pagesDir, htmlFile),
      js: jsFile && path.join(scriptsDir, jsFile),
      css: cssFile && path.join(stylesDir, cssFile)
    };
  });
};

module.exports = {
  entry: generateConfig().reduce((entries, page) => {
    if (page.js) entries[page.name] = page.js;
    return entries;
  }, {}),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/Artwall/[name][ext]'
        }
      }
    ]
  },

  plugins: [
    // Tambahkan CopyWebpackPlugin di sini
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/assets/Artwall',
          to: 'assets/Artwall',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/.DS_Store'] // Abaikan file sistem Mac
          }
        }
      ]
    }),
    // Plugin HtmlWebpackPlugin yang sudah ada
    ...generateConfig().map(page => 
      new HtmlWebpackPlugin({
        template: page.template,
        filename: `Art-wall/${page.name}.html`,
        chunks: page.js ? [page.name] : [],
        inject: 'body'
      }),
    )
  ],

  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    }
  }
};