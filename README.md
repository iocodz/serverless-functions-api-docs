# serverless-functions-api-docs

[![npm version](https://badge.fury.io/js/serverless-functions-api-docs.svg)](https://badge.fury.io/js/serverless-functions-api-docs)

Create the documentation of your serverless functions automatically.

* Netlify Functions
* Vercel Functions
* Next.js Functions
* Nuxt.js Functions

## 🚀 Getting Started

```
yarn add serverless-functions-api-docs
npm install serverless-functions-api-docs
```

## 👩‍💻 Usage

### Personalize your docs site

Edit the file `doc_config.js` with the basic information of your site or organization.

For **Next** and **Nuxt** it is recommended to set the `outputfile` path to **public** and **static** folders.

```javascript
const serverlessFunct = require('serverless-functions-api-docs/index');

const config = {
    basedir: "functions",
    outputfile: "index.html",
    info: {
        sitename: "MY SITE / ORGANIZATION",
        logourl: "MY LOGO URL",
        sitedescription: "MY SITE DESCRIPTION"
    }
}

serverlessFunct.createDoc(config);
```

### In the project

Create an `index.doc.json` file inside each function folder.

```
project
│   node_modules
│   functions
|   └───function1
|   │   │   index.js
|   │   │   index.doc.json <-
|   ...
│   package.json
│   doc_config.js    
```

Each file must have the following structure:

```
[
    {
        "name": "ENDPOINT NAME",
        "path": "/endpoint-url",
        "method": "GET",
        "description": "SOME DESCRIPTION",
        "fields": [
            {
                "name": "name",
                "type": "String",
                "required": "true"
            }
        ]
    }
]
```

### Generate the docs

To generate the documentation we simply execute `yarn run createdoc` or `npm run createdoc`.

## Final Result

Look at the web generated in https://raulcr98.github.io/serverless-functions-api-docs/

![image](https://user-images.githubusercontent.com/32805147/142460481-ab0d5a76-1a51-48c3-b663-0ff0f49ad8fe.png)

## 👏 Contributing

Pull requests and 🌟 stars are always welcome.
For major changes, please open an issue first to discuss what you would like to change.

## 📩 Contact

rahulrcr98@gmail.com

Twitter @iamraul_net

Linkedin @iamraul

