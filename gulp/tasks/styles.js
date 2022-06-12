const { paths } = require('../paths');

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const { browsersync } = require('../browsersync');

function sassTask(isDev) {
    let t = src(paths.styles.src);

    if (isDev)
        t = t.pipe(sourcemaps.init());

    t = t.pipe(sass().on('error', sass.logError));

    if (!isDev)
        t = t.pipe(cssnano());

    if (isDev)
        t = t.pipe(sourcemaps.write(paths.styles.maps))
            .pipe(browsersync.stream());

    return t.pipe(dest(paths.styles.dist));
}

exports.sassDevTask = () => sassTask(true);
exports.sassReleaseTask = () => sassTask(false);