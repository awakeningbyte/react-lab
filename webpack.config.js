var  path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: "./src/app.js",
	output: {
		path:	"./dist",
		filename: "bundle.js",
		publicPath: "/dist"
			
	},
	devServer: {
		inline: true,
		hot: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				include: __dirname,
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react", "react-hmre"]
				}
		
			}

		]

	}

}
