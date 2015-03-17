module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'test/**/*.js',
            'routes/*.js', 'routes/**/*.js', 'app.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
