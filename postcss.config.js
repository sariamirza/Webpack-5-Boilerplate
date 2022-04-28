const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-rtlcss"),
        purgecss({ content: ["./src/view/**/*.pug"] }),
    ],
};
