[![Build Status][travis-image]][travis-url]

#About

Introduction to ES6.  In this project I introduce concepts and code samples covering the latest and greatest in JavaScript. This project uses a "transpiler" called Babel to generate ES5 code from ES6 code that can run in any modern browser.

###Brown Bag Notes

Notes for doing this presentation in brown bag.

- Demo Babel's "Try it out"

##Setup Process

- Recommend running: npm install -g karma-cli (global accessibility of Karma)
- Run npm install at the root directory where you clone the project.

#JavaScript 6 Concepts

##let

let allows us to define variables.  var only has two scopes:  global and function (0 or 100).  let gives us block scope!

**always use let over var to avoid variable hoisting in functions**

####Demo (powered by jasmine and Karma)

- cd ~/Programming/Personal/ES6BrownBag/
- babel src --watch --out-dir tests
- karma start

##const

- const will have block scoping just like the let keyword.  

##Destructuring

- Destructuring comes from other languages.  It's a powerful feature.
- It may be one of the more difficult ones to grasp at first.
- Demo

##Default parameter values

- Same syntax as C# function(name="Brian")
- Null will not



[travis-url]:  https://travis-ci.org/pbrianmackey/ES6
[travis-image]: https://travis-ci.org/pbrianmackey/ES6.svg
