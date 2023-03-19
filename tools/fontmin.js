const Fontmin = require('fontmin');

const fontmin = new Fontmin()
    .src('../src/html/css/*.ttf')
    .dest('../src/html/css/fonts/optimized');

fontmin.run(function(err, files) {
  if (err) {
    throw err;
  }

  console.log(files[0]);
  // => { contents: <Buffer 00 01 00 ...> }
});
