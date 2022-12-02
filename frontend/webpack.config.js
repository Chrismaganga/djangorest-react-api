const path = require("path");
const { Module } = require("webpack");
const webpack = require("webpack");

Module.exports = {
    entry: ".src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        Filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization:{
        minimize: true,
    },
    Plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
};
