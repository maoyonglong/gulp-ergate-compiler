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
