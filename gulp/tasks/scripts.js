const { paths } = require('../paths');

const { src, dest } = require('gulp');

function scriptsTask() {
    return src(paths.scripts.src)
        .pipe(dest(paths.scripts.dist));
}

exports.scriptsTask = scriptsTask;