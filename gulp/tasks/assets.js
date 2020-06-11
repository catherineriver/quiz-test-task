import gulp from 'gulp';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import { plumberConfig } from '../config';
import { isDevelopment } from '../util/env';

export const assets = () => {
	return (
		gulp
			.src(['**/*.*', '!**/_*.*'], { cwd: 'app/static/assets' })
			.pipe(plumber(plumberConfig))
			.pipe(changed('dist/assets'))

			// Copy other files
			.pipe(gulp.dest('dist/assets'))
	);
};

export const staticFiles = () =>
	gulp
		.src('**/{*,.*}', { cwd: 'app/static/public' })
		.pipe(plumber(plumberConfig))
		.pipe(gulp.dest('dist'));
