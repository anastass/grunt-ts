/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    connect: {
        server: {
            options: {
                port: 8080,
                base: './'
            }
        }
    },
    typescript: {
      base: {
        src: ['lib/**/*.ts'],
        dest: 'js',
        options: {
            module: 'amd',
            target: 'es5'
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      typescript: {
        files: '**/*.ts',
        tasks: ['typescript']
      },
    },
    open: {
        dev: {
            path: 'http://localhost:8080/index.html'
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  // Default task.
  grunt.registerTask('default', ['connect', 'open', 'watch']);

};
