const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // prefer Dart SASS over other SASS (i.e Node-SASS)
                            implementation: require("sass"),
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};