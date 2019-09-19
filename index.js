const through = require('through2')
const getStream = require('get-stream')

const Parser = require('ergate-complier')

const PLUGIN_NAME = 'gulp-egrate'

async function transformTemplate (content, options) {
    let parser = new Parser(options)
    parser = await parser.parse(content).codegen()
    return parser.getCode()
}

function toString (file) {
    if (file.isBuffer()) {
        return file.contents.toString()
    }
    if (file.isStream()) {
        return getStream(file.contents)
    }
}

function gulpErgate (options) {

  return through.obj(async function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
    }
    
    const fileString = toString(file)

    const code = await transformTemplate(fileString, options)

    file.contents = Buffer.from(code)

    cb(null, file);

  });

};

module.exports = gulpErgate