# Introduction

Project designed for Node 12.14.0
Babel transpiles the ES2020 app to be backward compatible and outputs the artifact to the ./dist folder

.env file holds secrets

# To Do

# Getting Started

1. Installation process

- clone repo
- npm install
- npm start

2. Software dependencies

- see package.json file

BABEL
This means you can use new built-ins like Promise or WeakMap, static methods like Array.from or Object.assign, instance methods like Array.prototype.includes, and generator functions (when used alongside the regenerator plugin). The polyfill adds to the global scope as well as native prototypes like String in order to do this.

For library/tool authors this may be too much. If you don't need the instance methods like Array.prototype.includes you can do without polluting the global scope altogether by using the transform runtime plugin instead of @babel/polyfill.

3. Latest releases
4. API references

# Build and Test

TODO: Describe and show how to build your code and run the tests.
