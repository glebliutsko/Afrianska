const { paths } = require('../paths');

const { watch } = require('gulp');
const { browsersync } = require('../browsersync')

const { sassDevTask } = require('./styles');
const { htmlDevTask } = require('./html');
const { fontsTask } = require('./fonts');
const { scriptsTask } = require('./scripts');
const { imagesTask } = require('./images');

function watchTask() {
    browsersync.init({
        server: {
            open: false,
            baseDir: "./dist/"
        }
    });

    watch(paths.styles.src, sassDevTask);
    watch(paths.html.src, htmlDevTask).on('change', browsersync.reload);
    watch(paths.fonts.src, fontsTask).on('change', browsersync.reload);
    watch(paths.scripts.src, scriptsTask).on('change', browsersync.reload);
    watch(paths.images.src, imagesTask).on('change', browsersync.reload);
}

exports.watchTask = watchTask;