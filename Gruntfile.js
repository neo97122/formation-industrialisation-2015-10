module.exports = function(grunt) {
    'use strict';

    require('jit-grunt')(grunt);

    grunt.initConfig({
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less-autoprefix'],
            },
        },
        less: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'less',
                    src: ['*.less'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
              browsers: ['last 3 versions', 'ie 8', 'ie 9']
            },
            dev: {
                files: [{
                    expand: true,
                    src: ['css/*.css'],
                }]
            }
        }
    });

    grunt.registerTask('less-autoprefix', [
        'less:dev',
        'autoprefixer:dev'
    ])
};