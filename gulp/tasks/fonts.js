const { paths } = require('../paths');

const { src, dest } = require('gulp');

function fontsTask() {
    return src(paths.fonts.src)
        .pipe(dest(paths.fonts.dist));
}
exports.fontsTask = fontsTask;