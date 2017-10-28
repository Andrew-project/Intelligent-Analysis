/**
 * Created by dongsj on 2017/2/21.
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // This will load in our package.json file so we can have access
    // to the project name and version number.
    pkg: grunt.file.readJSON('package.json'),

    // Constants for the Gruntfile so we can easily change the path for
    // our environments.
    BASE_PATH: './',
    DEVELOPMENT_PATH: './',

    // The YUIDoc plugin to generate documentation for code files.
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          extension: '.ts',                               // Default '.js' <comma-separated list of file extensions>
          paths: '<%= DEVELOPMENT_PATH %>' + 'src/app/',
          outdir: '<%= BASE_PATH %>' + 'doc/'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-yuidoc');

  // Default task.
  grunt.registerTask('default', ['yuidoc']);

};
