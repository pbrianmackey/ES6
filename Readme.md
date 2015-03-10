[![Build Status][travis-image]][travis-url]

#About

Introduction to ES6.  In this project I introduce concepts and code samples covering the latest and greatest in JavaScript. This project uses a "transpiler" called Babel to generate ES5 code from ES6 code that can run in any modern browser.

###Brown Bag Notes

Notes for doing this presentation in brown bag.

- Turn ES6+ code into vanilla ES5 with no runtime
- Demo Babel's "Try it out"

##Setup Process

- Recommend running: npm install -g karma-cli (global accessibility of Karma)
- Run npm install at the root directory where you clone the project.

####Demo (powered by jasmine and Karma)

- cd ~/Programming/Personal/ES6BrownBag/
- babel src --watch --out-dir tests
- karma start

#JavaScript 6 Concepts

##let

let allows us to define variables.  var only has two scopes:  global and function (0 or 100).  let gives us block scope!

**always use let over var to avoid variable hoisting in functions**



##const

- const will have block scoping just like the let keyword.  

##Destructuring

- Destructuring comes from other languages.  It's a powerful feature.
- It may be one of the more difficult ones to grasp at first.
- Demo

##Default parameter values

- Same syntax as C# function(name="Brian")
- Null will not

##Using ES6 Today

- Angular 2.0, Ember and [Aurelia](http://aurelia.io/) are being developed in ES6.
- More and more companies are using ES6 in production today.
- Transpilers
- Execution environment:  node or browser
- Polyfills/Shims
- [ES6 Features](https://github.com/lukehoban/es6features#symbols)
- [More ES6 Features](https://github.com/addyosmani/es6-tools)
- [Compatability Chart](http://kangax.github.io/compat-table/es6/)
- ES6 and ES5 shims

[travis-url]:  https://travis-ci.org/pbrianmackey/ES6
[travis-image]: https://travis-ci.org/pbrianmackey/ES6.svg
