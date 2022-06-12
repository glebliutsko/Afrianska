const { paths } = require('../paths');

const del = require('del');

function cleanTask() {
    return del(paths.outputdir);
}

exports.cleanTask = cleanTask;