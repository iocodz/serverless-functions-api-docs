const serverlessFunct = require('../index');

const config = {
    basedir: "functions",
    outputfile: "index.html",
    info: {
        sitename: "MY API",
        logourl: "https://jesamconsulting.com/assets/logo_black.png",
        sitedescription: "Documentación de la API de JESAM"
    }
}

serverlessFunct.createDoc(config);