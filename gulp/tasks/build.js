import { series, parallel } from 'gulp';

import cleanup from './cleanup';
import { html } from './html';
import icons from './icons';
import moduleImages from './moduleImages';
import { assets, staticFiles } from './assets';
import scripts from './scripts';
import css from './css';

const build = series(
	cleanup,
	series(
		parallel(html, icons, moduleImages, assets, staticFiles, scripts),
		css
	)
);

export default build;
