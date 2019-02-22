const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports={
    // 入口文件
    entry:path.join(__dirname,'./src/main.js'),
    // 出口文件
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(png|jpg|webp|psd|gif})$/,use:'url-loader?limit=78965&name=[hash:8]-name.[ext]'},
            {test:/\.(ttf|woff|woff2|eot|svg)/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}               