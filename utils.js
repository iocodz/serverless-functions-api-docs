const fs = require('fs')

exports.createDocumentation = function(endpoints, config) {
    // console.log(endpoints[0]['name'])
    let data = "";
    endpoints.map(endpoint => {
        const endp = (JSON.parse(endpoint))
        data = data + `
        <section>

        <h2 id="header-2">${endp.name}</h2>

        <blockquote>
            <p>${endp.method} <b>${endp.path}</b></p>

            <p>${endp.description}</p>
        </blockquote>

        </section>`
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
                <p>Generated using <a href="https://www.npmjs.com/package/netlify-functions-api-docs">netlify-functions-api-docs</a></p>
                
                <p><small>Created by <a href="https://github.com/raulcr98">raulcr98</a>. Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
            </footer>
            
        </div>
        <script src="https://pages-themes.github.io/minimal/minimal/assets/js/scale.fix.js"></script>
    </body>
    </html>`;

    fs.writeFileSync('index.html', writeText, function (err) {
        if (err) throw err;
            console.log('File is created successfully.');
    });
    // console.log(writeText)
}