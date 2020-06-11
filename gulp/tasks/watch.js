import gulp from 'gulp';
import { reload } from './server';
import { pages, html } from './html';
import css from './css';
import scripts from './scripts';
import icons from './icons';
import moduleImages from './moduleImages';
import { assets, staticFiles } from './assets';

const watch = () => {
	global.watch = true;

	// Modules, pages
	gulp
		.watch('app/**/*.pug', gulp.series(pages, reload))
		.on('all', (event, filepath, stats) => {
			global.emittyChangedFile = {
				path: filepath,
				stats
			};
		});

	// Modules data
	gulp.watch('app/modules/**/*.yml', gulp.series(html, reload));

	// Static styles
	gulp.watch('app/static/styles/**/*.styl', gulp.series(css));

	// Modules styles
	gulp.watch('app/modules/**/*.styl', gulp.series(css));

	// Static scripts
	gulp.watch('app/scripts/**/*.js', gulp.series(scripts, reload));

	// Modules scripts
	gulp.watch('app/modules/**/*.js', gulp.series(scripts, reload));

	// Modules images
	gulp.watch(
		'app/modules/**/images/*.{jpg,gif,svg,png}',
		gulp.series(moduleImages, reload)
	);

	// Assets
	gulp.watch('app/static/assets/**/*', gulp.series(assets, reload));

	// Svg icons
	gulp.watch('app/static/icons/**/*.svg', gulp.series(icons, css, reload));

	// Static files
	gulp.watch('app/static/public/**/{*,.*}', gulp.series(staticFiles));
};

export default watch;
