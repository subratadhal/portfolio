module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    '@svgr/webpack',                   
                    {
                        loader: 'file-loader',
                        options: {}
                    },
                ],
            },
        ],
    },
};