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

    watch(paths.styles.watch, sassDevTask);
    watch(paths.html.watch, htmlDevTask).on('change', browsersync.reload);
    watch(paths.fonts.watch, fontsTask).on('change', browsersync.reload);
    watch(paths.scripts.watch, scriptsTask).on('change', browsersync.reload);
    watch(paths.images.watch, imagesTask).on('change', browsersync.reload);
}

exports.watchTask = watchTask;