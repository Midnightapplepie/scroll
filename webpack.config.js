var path = require("path");
console.log("Path!!!!!!!:",path.resolve(__dirname,"/"));

module.exports = {
	entry: [
	__dirname + '/app/index.js'
	]
	,
	output:{
		path: path.resolve(__dirname,"/"),
		publicPath: "/",
		filename: 'built.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader', //use to load ES2015 files
				query:{
					presets: ['react','es2015']
				}
			},
			{
				test:/\.scss$/,
				loaders:['style','css','sass']
			}
		]
	},
	devServer: {
		port: 8000
	}
}