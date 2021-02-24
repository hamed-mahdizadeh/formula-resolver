const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/src/formula-resolver.ts'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src")
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'formula-resolver.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },
};