var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './app',
    output:{
        path:'build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['','.jsx','.js'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
