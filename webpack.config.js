var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'vue-svg-transition.min.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'			
			},			
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader',
            }
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
    devtool: '#source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: { warnings: false },
			comments: false,
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}