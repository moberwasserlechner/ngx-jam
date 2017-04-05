/**
 * taken from ng2-dnd
 */
module.exports = function(config) {
    var testWebpackConfig = require('./webpack.test.js');

    var configuration = {
        browserNoActivityTimeout: 100000,
        basePath: '',

        frameworks: ['jasmine'],

        // list of files to exclude
        exclude: [ ],

        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [ { pattern: './config/spec-bundle.js', watched: false } ],

        preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

        // Webpack Config at ./webpack.test.js
        webpack: testWebpackConfig,

        coverageReporter: {
            type: 'in-memory'
        },

        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: { stats: 'errors-only'},

        reporters: [ 'mocha', 'coverage', 'remap-coverage' ],

        // web server port
        port: 9876,

        colors: true,

        /*
         * level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

        singleRun: true

    };

    config.set(configuration);
};