const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const browserSync = require("browser-sync").create();
const gzip = require('gulp-gzip');


function cleanTask() {
    return del('dist');
}

function sassTask(isDev) {
    let t = src('src/sass/**/*.sass');

    if (isDev)
        t = t.pipe(sourcemaps.init());

    t = t.pipe(sass().on('error', sass.logError));

    if (!isDev)
        t = t.pipe(cssnano());

    if (isDev)
        t = t.pipe(sourcemaps.write('.'))
            .pipe(browserSync.stream());

    return t.pipe(dest('dist/css'));
}

function sassDevTask() {
    return sassTask(true);
}

function sassReleaseTask() {
    return sassTask(false);
}

function htmlTask(isDev) {
    let t = src('src/**/*.html');

    if (!isDev)
        t.pipe(htmlmin({ collapseWhitespace: true }))

    return t.pipe(dest('dist'));
}

function htmlDevTask() {
    return htmlTask(true);
}

function htmlReleaseTask() {
    return htmlTask(false);
}

function fontsTask() {
    return src('src/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

function scriptsTask() {
    return src('src/js/**/*.js')
        .pipe(dest('dist/js'));
}

function imagesTask() {
    return src('src/img/**/*')
        .pipe(dest('dist/img'));
}

function gzipTask() {
    return src('dist/**/*.{js,css,html,svg}')
        .pipe(gzip({
            append: true,
            gzipOptions: {
                level: 9
            }
        }))
        .pipe(dest('dist'));
}

function watchTask() {
    browserSync.init({
        server: {
            open: false,
            baseDir: "./dist/"
        }
    });

    watch('src/sass/**/*.sass', sassDevTask);
    watch('src/**/*.html', htmlDevTask).on('change', browserSync.reload);
    watch('fonts/**/*', htmlDevTask).on('change', browserSync.reload);
    watch('src/js/**/*.js', scriptsTask).on('change', browserSync.reload);
    watch('src/img/**/*', imagesTask).on('change', browserSync.reload);
}

exports.clean = cleanTask;

exports.default = series(
    cleanTask,
    parallel(
        sassDevTask,
        htmlDevTask,
        fontsTask,
        scriptsTask,
        imagesTask
    ),
    watchTask
);

let releaseBuild = series(
    cleanTask,
    parallel(
        sassReleaseTask,
        htmlReleaseTask,
        fontsTask,
        scriptsTask,
        imagesTask
    )
);
exports.build = releaseBuild;
exports.buildGzip = series(releaseBuild, gzipTask);