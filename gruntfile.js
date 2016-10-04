module.exports = function(grunt) {

    // project config
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'scss/main.css': 'scss/main.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'src/css/main.min.css': ['scss/main.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                  spawn: false,
                  interrupt: true
                },
            },
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
}