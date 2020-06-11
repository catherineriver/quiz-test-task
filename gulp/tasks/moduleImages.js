import gulp from 'gulp';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import rename from 'gulp-rename';
import path from 'path';
import { plumberConfig } from '../config';

const moduleImages = () => {
  return gulp.src('**/*.{jpg,gif,svg,png}', { cwd: 'app/modules/*/images' })
    .pipe(plumber(plumberConfig))
    .pipe(rename(file => {
      const f = path.parse(file.dirname);
      const f2 = path.parse(f.dir);
      const moduleName = f2.base;

      file.dirname = '';
      file.basename = moduleName + '__' + file.basename;

    }))
    .pipe(changed('dist/assets/images'))
    .pipe(gulp.dest('dist/assets/images'));
};

export default moduleImages;
