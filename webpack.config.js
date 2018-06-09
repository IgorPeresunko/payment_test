const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	entry: [
		"babel-polyfill",
		"./src/index.js"
	],
	output: {
		library: "PaymentWidget",
		libraryTarget: "umd",
		umdNamedDefine: true,
		filename: "widget.js",
		path: path.resolve(__dirname, "build/"),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	],
	
};