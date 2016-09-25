var path = require('path');
var webpack = require('webpack');

module.exports= {
	entry: './main.js',
	output: {
		path: "./dist",
		filename: "bundle.js",
		publicPath: "/dist"
	},
	devServer: {
		port: 8081,
		inline: true
	},
	module: {
		loaders: [
		{
			test: /\.js?$/,
			loader: "babel",
			include: __dirname,
			exclude: /node_modules/,
			query: {
				presets: ["es2015", "react","react-hmre"]
			}
		}
		]
	}	
}
