const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const ESLintPlugin = require("eslint-webpack-plugin");

const config = {
    entry: {
        mainStyle: path.join(__dirname, "src", "scss", "main.scss"),
        index: path.join(__dirname, "src", "index.js"),
        page: path.join(__dirname, "src", "page.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].bundle.js",
        clean: true,
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            scriptLoading: "defer",
            template: path.resolve(__dirname, "src", "view", "index.pug"),
            chunks: ["index", "style"],
            title: "Home",
        }),
        new HtmlWebpackPlugin({
            scriptLoading: "defer",
            template: path.resolve(__dirname, "src", "view", "page.pug"),
            filename: "page.html",
            chunks: ["page", "style", "index"],
            title: "Page",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext][query]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "font/[name][ext][query]",
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ["csv-loader"],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        watchFiles: ["./src/*.html", "./src/**/*"],
        liveReload: true,
        port: 8080,
    },
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            /* cacheGroups: {
                chnkstyle: {
                    type: "css/mini-extract",
                    name: "chunk",
                    chunks: (chunk) =>
                        chunk.name === "index" || chunk.name === "page",
                    enforce: true,
                },
            }, */
        },
    },
    watch: true,
    target: ["web"],
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.devtool = "eval-source-map";
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash].css",
            }),
        );
        config.module.rules.push({
            test: /\.pug$/,
            use: [{ loader: "simple-pug-loader", options: { pretty: true } }],
        });
    }

    if (argv.mode === "production") {
        config.output.filename = "js/[name].bundle.js";
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
        );
        config.module.rules.push({
            test: /\.pug$/,
            use: [{ loader: "simple-pug-loader", options: { pretty: false } }],
        });
    }
    return config;
};
