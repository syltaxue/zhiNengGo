module.exports = {
    entry: "./app/src/main.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "react-hot!babel"
            }
        ]
    }
}