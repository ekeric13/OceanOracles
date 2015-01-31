var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('seed', shell.task([
  'node ./server/config/seedData.js'
]));
