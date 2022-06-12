const { paths } = require('../paths');

const { src, dest } = require('gulp');

function imagesTask() {
    return src(paths.images.src)
        .pipe(dest(paths.images.dist));
}

exports.imagesTask = imagesTask;