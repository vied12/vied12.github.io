const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: function (config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      },
      {
        test: [/\.tsv$/,],
        loader: require.resolve('raw-loader'),
      },
    ]
    return config
  }
})
