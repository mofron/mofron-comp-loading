module.exports = {
    entry: __dirname + '/src/loading.js',
    output: {
        path: __dirname + '/dist',
        filename: 'loading.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
