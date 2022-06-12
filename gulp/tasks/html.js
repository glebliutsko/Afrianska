const { paths } = require('../paths');

const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');

function htmlTask(isDev) {
    let t = src(paths.html.src);

    if (!isDev)
        t.pipe(htmlmin({ collapseWhitespace: true }))

    return t.pipe(dest(paths.html.dist));
}


exports.htmlDevTask = () => htmlTask(true);
exports.htmlReleaseTask = () => htmlTask(false);