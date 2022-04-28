# Webpack 5 Boilerplate

Webpack 5 boilerplate with a configuration that helps a multiple-page application.

## Installation

Clone the repo and run npm install in your terminal
```bash
npm install
```
## Usage

There are two modes in the configuration: development and production, and each mode have three commands for building, running dev-server, and doing the both process (build and dev-server) in parallel.
***
### Development

* Building   
```bash
    npm run dev
```
* Starting dev-server    
```bash
    npm run start:server-dev
```
* Building and Starting dev-server
```bash
    npm start
```
***
### Production

* Building     
```bash
    npm run prod
```

* Starting dev-server  
```bash
    npm run start:server-prod
```

* Building and Starting dev-server  
```bash
    npm run start:prod
```
****
## Ingredients  

* [webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [PostCSS](https://postcss.org)
* [ESLint](https://eslint.org/)
* [PUG](https://pugjs.org/)
* [SASS](https://sass-lang.com/)
* [Prettier](https://prettier.io/)

## Dependencies

### webpack

* Core  
    * [webpack](https://github.com/webpack/webpack) - Webpack is a module bundler.

    * [webpack-cli](https://github.com/webpack/webpack-cli) - Webpack's Command Line Interface.

    * [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Serves a webpack app.
    
* Plugins  
    * [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - optimize and minify your CSS.

    * [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - Lightweight CSS extraction plugin.

    * [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) - This plugin uses eslint to find and fix problems in your JavaScript code

    * [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - Simplifies creation of HTML files to serve your webpack bundles.

* Loaders  
    * [babel-loader](https://github.com/babel/babel-loader) - This package allows transpiling JavaScript files using Babel and webpack.

    * [css-loader](https://github.com/webpack-contrib/css-loader) - The css-loader interprets @import and url() like import/require() and will resolve them.

    * [postcss-loader](https://github.com/webpack-contrib/postcss-loader) - Loader to process CSS with PostCSS.

    * [sass-loader](https://github.com/webpack-contrib/sass-loader) - Loads a Sass/SCSS file and compiles it to CSS.

    * [simple-pug-loader](https://github.com/Spence-S/simple-pug-loader) - Pug template loader for webpack that's better and more straight forward than the original.

    * [style-loader](https://github.com/webpack-contrib/style-loader) - Inject CSS into the DOM.

    * [csv-loader](https://github.com/theplatapi/csv-loader) - A webpack module to intelligently load csv files

### ESLint

* [eslint](https://github.com/eslint/eslint) - Find and fix problems in your JavaScript code.

* [eslint-config-airbnb-base](https://github.com/airbnb/javascript) - JavaScript Style Guide.

* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.

* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

### PostCSS

* [postcss-rtlcss](https://github.com/elchininet/postcss-rtlcss) - PostCSS plugin to build Cascading Style Sheets (CSS) with Left-To-Right (LTR) and Right-To-Left (RTL) rules using RTLCSS

* [autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by Can I Use.

* [postcss-purgecss](https://github.com/FullHuman/purgecss/tree/master/packages/postcss-purgecss) - PurgeCSS is a tool to remove unused CSS.

### Pug

* [pug](https://github.com/pugjs/pug) - Pug – robust, elegant, feature rich template engine for Node.js

### SASS

* [dart-sass](https://github.com/sass/dart-sass) - Sass is a stylesheet language that’s compiled to CSS.


