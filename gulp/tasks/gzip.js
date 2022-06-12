const { paths } = require('../paths');

const { src, dest } = require('gulp');

const gzip = require('gulp-gzip');

function gzipTask() {
    return src(paths.gzip.src)
        .pipe(gzip({
            append: true,
            gzipOptions: {
                level: 9
            }
        }))
        .pipe(dest(paths.gzip.dist));
}
exports.gzipTask = gzipTask;