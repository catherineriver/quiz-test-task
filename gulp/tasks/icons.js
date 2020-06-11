import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgSymbols from 'gulp-svg-symbols';
import gulpIf from 'gulp-if';
import gulpRename from 'gulp-rename';
import {
  plumberConfig,
  svgSymbolsConfig
} from '../config';

const icons = () =>
  gulp.src([ '**/*.svg', '!**/_*.svg' ], { cwd: 'app/static/icons' })
    .pipe(plumber(plumberConfig))
    .pipe(svgSymbols(svgSymbolsConfig))
    .pipe(gulpIf(/\.styl$/, gulp.dest('.tmp')))
    .pipe(gulpIf(/\.svg$/, gulpRename('icons.svg')))
    .pipe(gulpIf(/\.svg$/, gulp.dest('dist/assets/images')));

export default icons;
