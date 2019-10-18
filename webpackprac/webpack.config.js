// __dirname is the global var from node.js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // default setting of webpack 4
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    // end default setting
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    devServer: {
        port: 8866
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "./css/app.css",
        })
    ]
}

//Default config查找 ./src/index.js 作为默认入口点。 
//在 ./dist/main.js 中输出模块包