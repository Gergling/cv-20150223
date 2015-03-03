module.exports = function (grunt) {

    'use strict';

    var banner = '/* Greg Davies CV */\n'
            + '/* <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        paths = {
            css: grunt.file.expand([
                'src/public/vendor/bootstrap/dist/css/bootstrap.css',
                'src/public/module/**/*.css'
            ]),
            js: grunt.file.expand([
                'src/public/vendor/jquery/dist/jquery.js',
                'src/public/vendor/angular/angular.js',
                'src/public/vendor/angular-route/angular-route.js',
                'src/public/vendor/bootstrap/dist/js/bootstrap.js',
                'src/public/module/*/module.js',
                'src/public/module/**/*.js'
            ])
        };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/public/vendor/bootstrap/dist/fonts/',
                        src: ['**'],
                        dest: 'dist/fonts/'
                    }
                ]
            }
        },
        cssmin: {
            dist: {
                options: {
                    banner: banner
                },
                files: {
                    'dist/css/min.css': paths.css
                }
            }
        },
        jslint: {
            base: {
                src: [
                    'src/**/*.js',
                ],
                directives: {
                    browser: true
                }/*,
                options: {
                    failOnError: true
                }*/
            },
        },
        template: {
            dev: {
                options: {
                    data: {
                        prefix: 'src/public/',
                        paths: paths
                    }
                },
                files: {
                    'src/public/index.html': ['src/template/index.html.tpl']
                }
            },
            dist: {
                options: {
                    data: {
                        prefix: 'dist/',
                        paths: {
                            css: [ 'dist/css/min.css' ],
                            js: [ 'dist/min.js' ]
                        }
                    }
                },
                files: {
                    'dist/index.html': ['src/template/index.html.tpl']
                }
            }
        },
        uglify: {
            options: {
                banner: banner
            },
            dist: {
                files: {
                    'dist/min.js': paths.js
                }
            }
        },
        watch: {
            bootstrap: {
                files: '<%= jslint.bootstrap.src %>',
                tasks: [ 'jasmine:bootstrap', 'jslint:bootstrap', 'concat:bootstrap' ]
            },
            bower: {
                files: [ 'bower.json' ],
                tasks: [ 'bower' ]
            },
            gruntfile: {
                files: '<%= jslint.gruntfile.src %>',
                tasks: [ 'jslint:gruntfile' ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-template');

    // Tasks: template, dist
    // Default task
    grunt.registerTask('default', [ 'template:dev' ]);

    grunt.registerTask('install', [
        'bower',
        'template:dev'
    ]);

    grunt.registerTask('dist', [
        //'jslint',
        'copy:dist',
        'uglify',
        'cssmin',
        'template:dist'
    ]);
};
