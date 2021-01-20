const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};