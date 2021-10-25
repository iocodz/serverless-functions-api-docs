const nfad = require('../index');

const config = {
    basedir: "functions",
    info: {
        sitename: "MY API",
        logourl: "https://jesamconsulting.com/assets/logo_black.png",
        sitedescription: "Documentación de la API de JESAM"
    }
}

nfad.createDoc(config);