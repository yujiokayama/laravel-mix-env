const mix = require('laravel-mix');

mix
  // .js('src/js/main.js', 'public/assets/js')
  // .ts('src/ts/main.ts', 'public/assets/js')
  .react('src/js/main.js', 'public/assets/js')
  .sass('src/scss/style.scss', 'public/assets/css')
  .options({
    postCss: [require('postcss-css-variables')()]
  })
  .sourceMaps(false)
  .browserSync({
    files: 'public/**/*',
    server: 'public',
    proxy: false
  });
