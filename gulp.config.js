var _paths = {
    build: {
        html: 'bundle/',
        js: 'bundle/js/',
        css: 'bundle/css/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: {
            app: 'src/scripts/todo-app/index.js',
            common: ''
        },
        css: 'src/styles/index.scss',
        fonts: 'src/fonts/**.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: {
            app: 'src/scripts/todo-app/**/*.js',
            common: ''
        },
        css: 'src/styles/index.scss',
        fonts: 'src/fonts/**.*'
    },
    clean: './bundle'
};

var _serverConfig = {
    server: {
        baseDir: './bundle',
        tunnel: true,
        host: 'localhost',
        port: 8080,
    }
};

var config = {
    paths: _paths,
    serverConfig: _serverConfig
};

module.exports = global.config = config;
