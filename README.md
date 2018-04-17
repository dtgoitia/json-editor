## TODO

- [x] Setup Webpack 4 
- [x] Setup TypeScript
- [x] Move static assets to `/statics`.
- [x] Setup Webpack Dev Server
- [x] Add TypeScript linter for the project
- [x] Play around with React TypeScript
- [ ] Setup a `tsconfig.json` for production (minified) and another one for development (keep comments and function names).
- [x] Add monaco: https://github.com/timkendrick/monaco-editor
- [ ] Implement Schema for Monaco
- [ ] Add JSON linter for monaco
- [ ] Add "hard-coded" snippets
- [ ] Add tools to communicate with the server
- [ ] Implement swagger to validate JSON
- [ ] Build snippets from schema

## Install

First, clone the repo via git:
```bash
git clone git@github.com:dtgoitia/json-editor.git
```
and then install dependencies.
```bash
cd json-editor
npm install
```

## Run

Run this command to start a local server (hot reload):
```bash
npm start
```
or build to `/dist` folder:
```bash
npm run build
```

## Development

Note the instructions below target _Visual Studio Code_ (VSC):

* TypeScript Linter:
  * Install the `tslint` VSC extension.
  * Reload VSC.
  * Create a `tslint.json` configuration file:

```json
{
  "enable": true,
  "alwaysShowStatus": true,
  "defaultSeverity": "error",
  "extends": ["tslint:latest", "tslint-react"],
  "rules": {
    "jsx-wrap-multiline": false,
    "jsx-self-close": true,
    "jsx-equals-spacing": true
  }
}
```