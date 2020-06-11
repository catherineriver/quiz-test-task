# Gulp Front

## Quickstart

1. Install the [node.js](https://nodejs.org)
2. Clone the project or [download](https://github.com/zoxon/gulp-front/archive/master.zip) the file
	```sh
	git clone git@github.com:zoxon/gulp-front.git --depth 1 my-project
	```
3. Go to project folder and run
	```bash
	yarn run setup
	```
4. Start dev server
	```bash
	yarn start
	```
5. In browser open page with address [`http://localhost:3000/`](http://localhost:3000/)


## Main tasks

* `yarn run dev` - launches watchers and server
* `yarn run build` - compile a project
* `yarn run zip` - compile a project in zip


## Module generator

Create empty module by name in `source/modules` folder

By default generate only `*.pug` and `*.styl` files.

You can call `amo` with additional params like `js` and `yml`

```sh
yarn run amo <module-name> [js || yml]
```

## License
[The MIT License (MIT)](LICENSE)
