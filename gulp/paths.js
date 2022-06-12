const srcdir = './src';
const outputdir = './dist';

exports.paths = {
    srcdir: srcdir,
    outputdir: outputdir,

    fonts: {
        src: `${srcdir}/fonts/**/*`,
        dist: outputdir,
        watch: `${srcdir}/fonts/**/*`
    },

    html: {
        src: `${srcdir}/pages/**/*.html`,
        dist: outputdir,
        watch: [
            `${srcdir}/pages/**/*.html`,
            `${srcdir}/blocks/**/*.html`,
            `${srcdir}/html-templates/**/*.html`,
            `${srcdir}/data/**/*.json`
        ]
    },

    images: {
        src: `${srcdir}/img/**/*`,
        dist: `${outputdir}/img`,
        watch: `${srcdir}/img/**/*`
    },

    scripts: {
        src: `${srcdir}/js/**/*.js`,
        dist: `${outputdir}/js`,
        watch: `${srcdir}/js/**/*.js`
    },

    styles: {
        src: `${srcdir}/styles/**/*.sass`,
        dist: `${outputdir}/styles`,
        maps: './maps',
        watch: [
            `${srcdir}/styles/**/*.sass`,
            `${srcdir}/blocks/**/*.sass`
        ]
    }
};