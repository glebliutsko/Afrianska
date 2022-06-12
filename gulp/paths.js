const srcdir = './src';
const outputdir = './dist';

exports.paths = {
    srcdir: srcdir,
    outputdir: outputdir,

    fonts: {
        src: `${srcdir}/fonts/**/*`,
        dist: outputdir
    },

    gzip: {
        src: `${outputdir}/**/*.{js,css,html,svg}`,
        dist: outputdir
    },

    html: {
        src: `${srcdir}/**/*.html`,
        dist: outputdir
    },

    images: {
        src: `${srcdir}/img/**/*`,
        dist: `${outputdir}/img`
    },

    scripts: {
        src: `${srcdir}/js/**/*.js`,
        dist: `${outputdir}/js`
    },

    styles: {
        src: `${srcdir}/sass/**/*.sass`,
        dist: `${outputdir}/css`,
        maps: `./maps`
    }
}