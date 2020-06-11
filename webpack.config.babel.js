import path from 'path';
import webpack from 'webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import HappyPack from 'happypack';
import TerserPlugin from 'terser-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV ? 'production' : 'development';
const isDevelopment = NODE_ENV === 'development';

let options = {
	mode: NODE_ENV,
	entry: ['./main.js'],
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist/assets/javascripts'),
		publicPath: '/assets/javascripts/',
		library: 'App'
	},
	resolve: {
		modules: ['node_modules', path.join(__dirname, 'app')],
		alias: {
			'lodash-es': 'lodash',
			'@': path.resolve(__dirname, 'app'),
			'@scripts': path.resolve(__dirname, 'app/scripts'),
			'@modules': path.resolve(__dirname, 'app/modules')
		}
	},
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	context: path.resolve(__dirname, 'app/scripts'),
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: false,
						inline: 2
					},
					mangle: {
						safari10: true
					},
					output: {
						ecma: 5,
						comments: false,
						ascii_only: false
					}
				},
				parallel: true,
				cache: true,
				sourceMap: false
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'happypack/loader'
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
		new CaseSensitivePathsPlugin(),
		new CircularDependencyPlugin({
			// exclude detection of files based on a RegExp
			exclude: /a\.js|node_modules/,
			// add errors to webpack instead of warnings
			failOnError: true
		}),
		new DuplicatePackageCheckerPlugin(),
		new HappyPack({
			verbose: false,
			loaders: ['babel-loader']
		})
	]
};

export default options;
