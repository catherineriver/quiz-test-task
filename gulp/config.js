import path from 'path';

import posthtmlAttrsSorter from 'posthtml-attrs-sorter';
import rupture from 'rupture';

import errorHandler from './util/errorHandler';
import stylusFileExists from './util/stylusFileExists';

const CWD = process.cwd();

export const delConfig = ['dist', '.tmp'];

export const plumberConfig = {
	errorHandler
};

export const browserSyncConfig = {
	server: './dist',
	notify: false,
	reloadOnRestart: true,
	open: false,
	snippetOptions: {
		rule: {
			match: /<\/body>/i
		}
	}
};

// https://github.com/jescalan/accord/blob/master/docs/stylus.md
export const stylusConfig = {
	use: [rupture(), stylusFileExists()],
	include: [path.join(CWD, 'node_modules')],
	'include css': true
};

export const htmlPrettifyConfig = {
	unformatted: ['pre', 'code', 'textarea', 'script'],
	indent_char: ' ',
	indent_size: 2,
	preserve_newlines: true,
	brace_style: 'expand',
	end_with_newline: true
};

export const svgSymbolsConfig = {
	id: '%f',
	templates: [
		path.join(CWD, 'gulp/templates/icons-template.styl'),
		path.join(CWD, 'gulp/templates/icons-template.svg')
	],
	slug: function(name) {
		return name;
	},
	svgAttrs: {
		class: 'icons-sprite',
		xmlns: 'http://www.w3.org/2000/svg'
	}
};
export const posthtmlConfig = {
	plugins: [
		posthtmlAttrsSorter({
			order: [
				'class',
				'id',
				'name',
				'data',
				'ng',
				'src',
				'for',
				'type',
				'href',
				'values',
				'title',
				'alt',
				'role',
				'aria'
			]
		})
	],
	options: {}
};
