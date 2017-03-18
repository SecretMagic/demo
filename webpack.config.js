module.exports = {
    entry: {
        index: './src/js/entry.js'
    },
    output: {
        // path: './static/dist/',
        path: './out/',
        // publicPath: 'http://localhost:8080/static/dist/',
        publicPath: './out/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /.less$/,
                loader: 'style!css!less'
            }
        ]
    }
}