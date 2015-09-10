// Karma configuration
var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = function(config) {
  config.set({

	// base path, that will be used to resolve files and exclude
	basePath: './src',


	// frameworks to use
	frameworks: ['mocha', 'sinon-chai'],


	// list of files / patterns to load in the browser
	files: [
  		'app/index.js',
		'../node_modules/angular-mocks/angular-mocks.js',
  		'app/**/*.test.js'
	],


	// list of preprocessors
	preprocessors: {
	  'app/index.js': ['webpack']
	},


	webpack: {
		module: {
			loaders: [
				{ test: /\.(css|less)$/, loader: 'null' },
				{ test: /\.html$/, loader: 'raw' },
				{ test: /\.json$/, loader: 'json' },
				{ test: /jquery\.js$/, loader: 'expose?$' },
				{ test: /jquery\.js$/, loader: 'expose?jQuery' }
			],

			noParse: [
				/^jquery(\-.*)?$/,
				/^angular(\-.*)?$/
			]
		},

		devtool: 'eval',

		plugins: [
			new ngAnnotatePlugin({
				add: true
			})
		]
	},


	webpackMiddleware: {
		stats: {
			colors: true
		}
	},


	// test results reporter to use
	// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
	reporters: ['mocha'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera (has to be installed with `npm install karma-opera-launcher`)
	// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
	// - PhantomJS
	// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
	browsers: ['PhantomJS'],


	// If browser does not capture in given timeout [ms], kill it
	captureTimeout: 60000,


	// Continuous Integration mode
	// if true, it capture browsers, run tests and exit
	singleRun: false,


	// List plugins explicitly, since autoloading karma-webpack
	// won't work here
	plugins: [
		require('karma-webpack'),
		require('karma-mocha'),
		require('karma-sinon-chai'),
		require('karma-mocha-reporter'),
		require('karma-phantomjs-launcher')
	]
  });
};
