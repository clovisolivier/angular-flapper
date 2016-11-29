"use strict";
module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        ngtemplates: 'grunt-angular-templates',
        htmllint: 'grunt-html'
    });


    // Configurable paths for the application
    var appConfig = {
        app: 'source',
        dist: 'dist'
    };


    grunt.initConfig({


        // Project settings
        myApp: appConfig,

        pkg: grunt.file.readJSON('package.json'),


        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            },
            continuous: {
                configFile: 'test/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            },
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= myApp.dist %>/{,*/}*',
                        '!<%= myApp.dist %>/.git{,*/}*',
                        '!<%= myApp.dist %>/bower_components{,*/}*'

                    ]
                }]
            }
        },

        // Analyse JS style 
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', '<%= myApp.app %>/scripts/**/*.js', 'server.js', 'server/**/*.js'],

            test: ['<%= myApp.app %>/{,*/}*.test.js']
        },

        // Make sure code styles are up to par
        jscs: {
            options: {
                config: '.jscsrc'
            },
            all: {
                src: [
                    '<%= myApp.app %>/js/{,*/}*.js'
                ]
            },
            test: {
                src: ['<%= myApp.app %>/{,*/}*.test.js']
            }
        },


        jsbeautifier: {
            default: {
                src: ["{,*/}*.js"],
                files: ["dist/ng-flapper.js", "bower_components/{,*/}*.js"]
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= myApp.app %>',
                    dest: '<%= myApp.dist %>',
                    src: [
                        '*.{ico,png,txt,json}',
                        '*.html',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= myApp.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: 'fonts/*',
                    dest: '<%= myApp.dist %>'
                }]
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            dist: {
                files: {
                    '.tmp/js/app.js': ['<%= myApp.app %>{,*/}*.js']
                }
            }
        },
        // uglify JS and html JS to tmp to dist
        uglify: {
            dist: {
                files: {
                    '<%= myApp.dist %>/ng-flapper.js': [
                        '.tmp/js/app.js'
                    ]
                }
            }
        },
        // Run some tasks in parallel to speed up the build process
        concurrent: {
            dist: [
                'jsbeautifier:default'
            ]
        },
    });

    grunt.registerTask('beautify', ['jsbeautifier:default']);
    grunt.registerTask('test', ['karma:continuous']);

    // tasks apply on all files
    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'copy:dist',
        'ngAnnotate',
        'uglify',
    ]);
};
