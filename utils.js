const saveFile = require('fs').writeFileSync;
const fs = require('fs')

exports.createDocumentation = function(endpoints, config) {
    // console.log(endpoints[0]['name'])
    let data = "";
    endpoints.map(endpoint => {
        const endp = (JSON.parse(endpoint))
        endp.map(item => {
            let vars = item.fields.reduce((acc, field) => 
                acc += `<tr>
                    <td style="text-align: left">${field.name}</td>
                    <td style="text-align: left">${field.type}</td>
                    <td style="text-align: left">${field.required}</td>
                </tr>`, 
            "")

            data = data + `
            <section>

            <h2 id="header-2">${item.name}</h2>

            <blockquote>
                <p>${item.method} <b>${item.path}</b></p>

                <p>${item.description}</p>
            </blockquote>

            <table>
                <thead>
                    <tr>
                        <th style="text-align: left">field</th>
                        <th style="text-align: left">type</th>
                        <th style="text-align: left">required</th>
                    </tr>
                </thead>
                <tbody>
                    ${vars}
                </tbody>
                </table>

            </section>`
        });
    });

    const writeText = `<!DOCTYPE html>
    <html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <title>${config.info.sitename} - API Docs</title>
        <link rel="stylesheet"
            href="https://pages-themes.github.io/minimal/assets/css/style.css?v=814b8723af0aa0ada9b5784da6b73d862bb74150">
    
    </head>
    
    <body>
        <div class="wrapper">
            <header>
                <h1>${config.info.sitename}</h1>
    
                <img src="${config.info.logourl}" alt="Logo" width="100%" />
    
                <p>${config.info.sitedescription}</p>
    
            </header>

            ${data}

            <footer>
                <p>Generated using <a href="https://www.npmjs.com/package/serverless-functions-api-docs">serverless-functions-api-docs</a></p>
                
                <p><small>Created by <a href="https://github.com/raulcr98">raulcr98</a>. Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
            </footer>
            
        </div>
        <script src="https://pages-themes.github.io/minimal/minimal/assets/js/scale.fix.js"></script>
    </body>
    </html>`;

    fs.writeFileSync(config.outputfile, writeText, function (err) {
        if (err) throw err;
            console.log('File is created successfully.');
    });
    // console.log(writeText)
}

exports.initFiles = function() {
    try {
        fs.readFileSync('../../doc_config.js')
    } catch (error) {
        fs.writeFileSync('../../doc_config.js', `
        const netlifydoc = require('serverless-functions-api-docs/index');

        const config = {
            basedir: "functions",
            outputfile: "index.html",
            info: {
                sitename: "SITE NAME",
                logourl: "SITELOGO URL",
                sitedescription: "SITE DESCRIPTION"
            }
        }

        netlifydoc.createDoc(config);
        `, function (err) {
            if (err) throw err;
                console.log('Configuration file is created successfully.');
        });
    }
}

exports.updatePackage = function() {

    const pkgJsonPath = require.main.paths[0].split('node_modules')[0] + 'package.json';

    const json = require(pkgJsonPath);

    if (!json.hasOwnProperty('scripts')) {
        json.scripts = {};
    }

    json.scripts['createdoc'] = 'node doc_config.js';

    saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
}