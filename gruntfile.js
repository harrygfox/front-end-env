module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

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
                    'output.css': ['foo.css', 'bar.css']
                }
            }
        }
    });

    

    grunt.registerTask('default', ['sass']);
    grunt.loadNpmTasks('grunt-contrib-cssmin');

}