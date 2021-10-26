# netlify-functions-api-docs

Create the documentation of your Netlify functions automatically.

## 🚀 Getting Started

```
yarn add netlify-functions-api-docs
npm install netlify-functions-api-docs
```

## 👩‍💻 Usage

### Personalize your docs site

Edit the file `doc_config.js` with the basic information of your site or organization.

```javascript
const netlifydoc = require('netlify-functions-api-docs/index');

const config = {
    basedir: "functions",
    info: {
        sitename: "MY SITE / ORGANIZATION",
        logourl: "MY LOGO URL",
        sitedescription: "MY SITE DESCRIPTION"
    }
}

netlifydoc.createDoc(config);
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
{
    "name": "ENDPOINT NAME",
    "path": "/endpoint-url",
    "method": "GET",
    "description": "SOME DESCRIPTION"
}
```

### Generate the docs

To generate the documentation we simply execute `yarn run createdoc` or `npm run createdoc`.

## 👏 Contributing

Pull requests and 🌟 stars are always welcome.
For major changes, please open an issue first to discuss what you would like to change.

## 📩 Contact

rahulrcr98@gmail.com

Twitter @iamraul_net

Linkedin @iamraul

