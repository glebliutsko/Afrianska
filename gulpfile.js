const { series, parallel } = require('gulp');

const { cleanTask } = require('./gulp/tasks/clean');
const { sassDevTask, sassReleaseTask } = require('./gulp/tasks/styles');
const { htmlDevTask, htmlReleaseTask } = require('./gulp/tasks/html');
const { fontsTask } = require('./gulp/tasks/fonts');
const { scriptsTask } = require('./gulp/tasks/scripts');
const { imagesTask } = require('./gulp/tasks/images');
const { watchTask } = require('./gulp/tasks/watch');

exports.clean = cleanTask;

const devBuild = series(
    cleanTask,
    parallel(
        sassDevTask,
        htmlDevTask,
        fontsTask,
        scriptsTask,
        imagesTask
    )
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

exports.default = series(devBuild, watchTask);
exports.build = releaseBuild;