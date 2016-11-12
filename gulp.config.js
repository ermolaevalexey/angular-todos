var _libDir = 'node_modules';

var _paths = {
    build: {
        html: 'bundle/',
        js: {
            app: 'bundle/scripts/',
            appTemplates: 'bundle/scripts/todo-app/',
            lib: 'bundle/scripts/lib/'
        },
        css: 'bundle/styles/',
        fonts: 'bundle/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: {
            app: 'src/scripts/todo-app/index.js',
            appTemplates: 'src/scripts/todo-app/**/*.html',
            lib: 'src/scripts/lib/vendor.js'
            /*[
                _libDir + '/lodash/core.min.js',
                _libDir + '/angular/angular.min.js'
            ]*/
        },
        css: 'src/styles/index.scss',
        fonts: 'src/fonts/**.*'
    },
    watch: {
        html: 'src/*.html',
        js: {
            app: 'src/scripts/todo-app/**/*.js',
            appTemplates: 'src/scripts/todo-app/**/*.html',
            lib: _libDir
        },
        css: 'src/styles/**/*.scss',
        fonts: 'src/fonts/**.*'
    },
    clean: './bundle'
};

var _serverConfig = {
    server: './bundle',
    port: 8080
};

var config = {
    paths: _paths,
    serverConfig: _serverConfig
};

module.exports = global.config = config;
