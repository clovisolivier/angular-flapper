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

        watch: {
            jsTest: {
                files: ['test/**/*.test.js'],
                tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
            },
            js: {
                options: {
                    livereload: true
                },
                files: ['public/scripts/**', 'server/**/*.js', 'Gruntfile.js', 'server.js', 'public/**/*.js'],
                tasks: ['newer:jshint', 'newer:jscs:all', 'karma', 'build_dev']
            },
            html: {
                options: {
                    livereload: true
                },
                files: ['public/**/*.html', 'public/index.html'],
                tasks: ['newer:bootlint', 'newer:htmllint', 'build_dev']
            },
            css: {
                options: {
                    livereload: true
                },
                files: ['public/styles/**/*.css', 'public/styles/*.css'],
                tasks: ['newer:csslint:lax', 'build']
            }
        },

        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        },

        express: {
            all: {
                options: {
                    server: 'server.js',
                    hostname: 'localhost',
                    bases: ['./public'],
                    livereload: true
                }
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

        // Analyse bootstrap style
        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: []
            },
            files: ['<%= myApp.app %>/index.html']
        },

        // Analyse HTML style
        htmllint: {
            options: {
                force: true,
                ignore: [/Attribute “ng-[a-z-]+” not allowed on element “[a-z-]+” at this point./,
                    /Attribute “.*chart” not allowed on element “[a-z-]+” at this point./,
                    'Element “marquee” not allowed as child of element “div” in this context. (Suppressing further errors from this subtree.)',
                    /Element “head” is missing a required instance of child element “title”./,
                    /Bad value “{{.*}}” for attribute “.*” on element “.*”: Illegal character in path segment: “{” is not allowed./
                ]
            },
            src: ["public/*/*.html"]
        },

        // Analyse css style
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['<%= myApp.app %>/styles/**/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['<%= myApp.app %>/styles/**/*.css']
            }
        },
        jsbeautifier: {
            default: {
                src: ["{,*/}*.js"],
                files: ["lib/{,*/}*.js", "public/angular/{,*/}*.js"]
            }
        },

        parallel: {
            mix: {
                tasks: [{
                    grunt: true,
                    args: ['jshint']
                }, {
                    grunt: true,
                    args: ['htmllint']
                }]
            }
        }
    });



    grunt.registerTask('default', ['jsbeautifier:default', 'karma']);
    grunt.registerTask('simple', ['express', 'watch']);
    grunt.registerTask('beautify', ['jsbeautifier:default']);
    grunt.registerTask('js', ['express', 'jsbeautifier:js', 'watch:js']);
    grunt.registerTask('css', ['express', 'jsbeautifier:css', 'watch:css']);
    grunt.registerTask('html', ['express', 'jsbeautifier:html', 'watch:html']);

    grunt.registerTask('test', [
        'karma'
    ]);

    grunt.registerTask('build_dev', [
        /*   'newer:concurrent:dist',
           'newer:copy:dist',
           'newer:ngAnnotate',
           'concat_css',
           'newer:postcss:dist',
           'newer:cssmin',
           'ngtemplates',
           'newer:uglify',
           'newer:htmlmin'*/
    ]);

    grunt.registerTask('build', [
        /*'clean:dist',
        'concurrent:dist',
        'copy:dist',
        'ngAnnotate',
        'concat_css',
        'postcss:dist',
        'cssmin',
        'ngtemplates',
        'uglify',
        'htmlmin'*/
    ]);

};
