# gulp-ergate-compiler

A plugin for gulp to use [ergate-complier](https://www.npmjs.com/package/ergate-complier) to parse template file

# Usage
First, install:
```npm
npm install --save-dev gulp-ergate-compiler
```
Then create `ergate-complier-conf.js`:
```js
// this configure is to parse ejs
// so you need to install ejs
const ejsConf = require('./node_modules/ergate-complier/ejs-conf')

module.exports = [
    {
        tagName: 'ejs',
        conf: {
            ...ejsConf,
            template: {
                button: 'example/button'
            }
        }
    }
]
```
Finally, add this plugin to your `gulpfile.js`
```js
const gulp = require('gulp')
const compiler = require('./index')
const rename = require('gulp-rename')

exports.default = function () {
    return gulp.src('example/index.xml')
        .pipe(compiler())
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('example'))
}
```

# API
### compiler(options)   
the options is the options of `ergate-complier`'s `new Parser(options)`