const fs = require('fs');
const { createDocumentation } = require('./utils');

exports.createDoc = async function(config) {
    const folders = fs.readdirSync(config.basedir);
    const endpoints = folders.map(folder => {
        return fs.readFileSync(`${config.basedir}/${folder}/index.doc.json`, 'utf8' , (err, dt) => {
            if (err) {
              console.error(err)
              return
            }
            return JSON.parse(dt)
          })
    })
    createDocumentation(endpoints, config)
}