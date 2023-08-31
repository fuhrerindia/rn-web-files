const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { Platform } = require('react-native-web');

module.exports = {
    entry: './web/index.js',
    output: {
        path: path.join(__dirname, '/web/build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './web/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.web.js', '.web.jsx', '.web.ts', '.web.tsx'],
        alias: {
            'react-native$': Platform.OS === 'web' ? 'react-native-web' : 'react-native'
        }
    }
};
