// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-01-28 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: './',

    hostname: 'localhost',
    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],
   

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'public/bower_components/jquery/dist/jquery.js',
      'public/bower_components/angular/angular.js',
      'public/bower_components/bootstrap/dist/js/bootstrap.js',
      'public/bower_components/angular-animate/angular-animate.js',
      'public/bower_components/angular-timer/dist/angular-timer.js',
      'public/bower_components/angular-google-chart/ng-google-chart.js',
      'public/bower_components/flapper/src/jquery.flapper.js',
      'node_modules/socket.io-client/socket.io.js',
     // 'bower_components/angular-aria/angular-aria.js',
      'public/bower_components/angular-cookies/angular-cookies.js',
     // 'bower_components/angular-messages/angular-messages.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-route/angular-route.js',
      'public/bower_components/angular-sanitize/angular-sanitize.js',
      'public/bower_components/angular-touch/angular-touch.js',
      //'bower_components/chartist/dist/chartist.min.js',
      'public/bower_components/angular-mocks/angular-mocks.js',

      'public/bower_components/ngFitText/dist/ng-FitText.min.js',
      'public/bower_components/humanize-duration/humanize-duration.js',

      'public/bower_components/angular-css/angular-css.js',
      // endbower
      "public/scripts/**/*.js",
      "test/**/*.test.js",
     // "test/mock/**/*.js",
     // "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_WARN,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
