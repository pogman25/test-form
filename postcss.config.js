const cssnext = require('postcss-cssnext');
const csso = require("postcss-csso");

module.exports = {
    plugins: [
        cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
        }),
        csso
    ]
};
