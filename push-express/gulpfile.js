'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    rigger = require('gulp-rigger'),
    reload = browserSync.reload;


// Paths
var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/templates/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js', //В стилях и скриптах нам понадобятся только main файлы
        less: 'src/less/main.less',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        less: 'src/less/**/*.less',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

// Dev server
var config = {
    server: {
        baseDir: "./build",
        index: "index.html"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "dev_server"

};

//HTML build
gulp.task('html:build', function() {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

//Javascript build
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

//less build
gulp.task('less:build', function () {
    gulp.src(path.src.less)
        .pipe(less())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

//Images build
gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

//Fonts build
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

//Build for all
gulp.task('build', [
    'html:build',
    'js:build',
    'less:build',
    'fonts:build',
    'image:build'
]);

//Gulp watcher
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.less], function(event, cb) {
        gulp.start('less:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

//Livereload server
gulp.task('webserver', function () {
    browserSync(config);
});

//Cleaner
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

//Default task
gulp.task('default', ['build', 'webserver', 'watch']);