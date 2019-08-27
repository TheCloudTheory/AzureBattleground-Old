module.exports = function (grunt) {

    grunt.initConfig({
      ts: {
        default: {
          src: ["**/*.ts", "**/*.tsx", "!node_modules/**"],
          outDir: "build/",
          options: {
            module: "commonjs",
            jsx: "react",
            rootDir: "src",
            target: "es6",
            esModuleInterop: true
          }
        }
      },
      copy: {
        main: {
          files: [{
            nonull: true,
            expand: true,
            src: [
              'node_modules/react/umd/react.production.min.js',
              'node_modules/react-dom/umd/react-dom.production.min.js',
              'node_modules/semantic-ui-react/dist/umd/semantic-ui-react.min.js',
              'node_modules/axios/dist/axios.min.js',
              'node_modules/react-router/umd/react-router.min.js',
              'node_modules/react-router-dom/umd/react-router-dom.min.js',
              'node_modules/react-markdown/umd/react-markdown.js'
            ],
            dest: 'dist/',
            flatten: false
          }],
        },
      },
      browserify: {
        vendor: {
          src: [],
          dest: 'dist/vendor.js',
          options: {
            require: ['react', 'react-dom', 'semantic-ui-react', 'axios', 'moment', 'react-router', 'react-router-dom', 'react-markdown']
          }
        },
        client: {
          src: ['build/*.js'],
          dest: 'dist/app.js',
          options: {
            external: ['react', 'react-dom', 'semantic-ui-react', 'axios', 'moment', 'react-router', 'react-router-dom', 'react-markdown'],
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 9002,
            protocol: 'https',
            open: true,
            middleware: function (connect, options, middlewares) {
              var modRewrite = require('connect-modrewrite');
              middlewares.unshift(modRewrite(['!/api|\\.html|\\.json|\\.md|\\.js|\\.svg|\\.css|\\.png|/$ /index.html [L]',]));
              return middlewares;
          }
          }
        }
      },
      watch: {
        scripts: {
          files: ['src/**/*.tsx', 'src/**/*.ts'],
          tasks: ['rebuild'],
          options: {
            spawn: false,
            livereload: true
          },
        },
      },
      replace: {
        dist: {
          options: {
            patterns: [
              {
                match: 'REDIRECT_URI',
                replacement: '<%= process.env.REDIRECT_URI %>'
              },
              {
                match: 'API_URL',
                replacement: '<%= process.env.API_URL %>'
              }
            ]
          },
          files: [
            { expand: true, flatten: false, src: ['build/config/axios.js'], dest: '' }
          ]
        }
      },
      env: {
        local: {
          REDIRECT_URI: 'https://localhost:9002',
          API_URL: 'https://localhost:5001/api'
        },
        debug: {
          REDIRECT_URI: 'https://localhost:9002',
          API_URL: 'https://127.0.0.1:65113/api'
        },
        dev: {
          REDIRECT_URI: '',
          API_URL: ''
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-env');
  
    grunt.registerTask('start', ['env:local', 'start-env'])
    grunt.registerTask('start-env', ['ts', 'copy', 'replace', 'browserify', 'connect', 'watch']);
    grunt.registerTask('start-debug', ['env:debug', 'start-debug-env'])
    grunt.registerTask('start-debug-env', ['ts', 'copy', 'replace', 'browserify', 'connect', 'watch']);
    grunt.registerTask('rebuild', ['ts', 'copy', 'browserify:client']);
    grunt.registerTask('build', ['env:dev', 'build-env']);
    grunt.registerTask('build-env', ['ts', 'copy', 'replace', 'browserify', 'env:dev']);
  };