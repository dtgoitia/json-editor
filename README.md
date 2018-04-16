## TODO

- [x] Setup Webpack 4 
- [x] Setup TypeScript
- [x] Move static assets to `/statics`.
- [x] Setup Webpack Dev Server
- [ ] Add monaco: https://github.com/timkendrick/monaco-editor
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