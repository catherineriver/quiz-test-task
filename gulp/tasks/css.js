import gulp from 'gulp';
import plumber from 'gulp-plumber';
import stylus from 'gulp-stylus';
import postcss from 'gulp-postcss';
import { plumberConfig, stylusConfig } from '../config';
import bs from '../util/getBrowserSyncInstance';


const css = () =>
  gulp.src([ '*.styl', '!_*.styl' ], { cwd: 'app/static/styles' })
    .pipe(plumber(plumberConfig))
    .pipe(stylus(stylusConfig))
    .pipe(postcss())
    .pipe(gulp.dest('dist/assets/stylesheets'))
    .pipe(bs.reload({ stream: true }));

export default css;
