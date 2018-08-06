module.exports = {
  parser: 'postcss',
  plugins: [
    require('postcss-preset-env')(),
    require('postcss-nested')(),
    require('postcss-minimize')(),
  ],
  map: false,
};
