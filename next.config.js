const withImages = require('next-images');
module.exports = withImages({
  esModule: true
})

module.exports = {
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
};
