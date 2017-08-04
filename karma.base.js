const path = require('path');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine', 'sinon-chai'],
    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'osx', 'coverage'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: [
              path.resolve('src/'),
              path.resolve('node_modules/')
            ],
            loader: 'babel'
          },
          {
            test: /\.js$/,
            include: path.resolve('src/'),
            loader: 'isparta'
          }
        ]
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react-addons-test-utils': 'react-dom'
      }
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
