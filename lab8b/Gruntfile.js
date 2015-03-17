module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jasmine: {
            test: {
                src: 'scripts/*.js',
                options: {
                    vendor: [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
                    ],
                    specs: 'test/*.spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
