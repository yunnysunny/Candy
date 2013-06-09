var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['src/styles/{,*/}*'],
        tasks: ['compass']
      },
      pages: {
        files: ['src/pages/{,*/}*', 'posts/{,*/}*', 'src/layouts/{,*/}*'],
        tasks: ['pages']
      }
    },
    pages: {
      options: {
        pageSrc: 'src/pages'
      },
      posts: {
        src: 'posts',
        dest: 'dist',
        layout: 'src/layouts/post.jade',
        url: 'blog/posts/:title',
        options: {
          pagination: {
            postsPerPage: 3,
            listPage: 'src/pages/index.jade'
          }
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, 'dist'),
              mountFolder(connect, 'src')
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:9000'
      }
    },
    clean: {
      server: 'dist'
    },
    compass: {
      options: {
        sassDir: 'src/styles',
        cssDir: 'dist/styles',
        imagesDir: 'src/images',
        relativeAssets: true
      },
      server: {}
    },
    // Move files not handled by other tasks
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
        dest: 'dist',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'images/{,*/}*',
            'styles/fonts/{,*/}*'
          ]
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'clean:server',
    'compass',
    'pages',
    'copy'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', 'build');
};
