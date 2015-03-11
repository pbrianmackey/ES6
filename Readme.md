[![Build Status][travis-image]][travis-url][![Code Climate](https://codeclimate.com/github/pbrianmackey/ES6/badges/gpa.svg)](https://codeclimate.com/github/pbrianmackey/ES6)

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

- First time run Setup Process
- cd ~/ES6/
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

##Default values

- Undefined works with default params, null overrides the default param value with the value null.

it("works with descructuring", function() {
  let doWork(function() {
            url,
            {data = "Brian", cache = true}){
              return data;
            });

      let result = doWork(
          "api/test",
          {
            cache: false
          }
        );

        expect(result).toBe("Brian");
    })
  });

##Rest Parameters

- Always the last parameter in a function.  
- Rest parameters allow access to [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) such as (forEach)
- Rest parameters make it clear how many arguments are allowed

```javascript
let sum = function(...numbers) {
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    result += numbers[i];
  }
  return result;
}
```

##Spread

- Similar to Rest parameters.  used outside parameters you can turn an array into individual elements with Spread.

```javascript
var result = doWork(...[1,2,3]);
//is equivalent to...
var result = doWork(1,2,3);

//you can also combine arrays
var array1 = [1,2,3];
var array2 = [...array1,4,5,6];//1,2,3,4,5,6
```

##Template Literals

- Similar to C#'s token string replacement

```javascript
it("can create url's", function() {
  let lookup = "customerLookup";
  let id = "id"
  //note the back-tick
  let url = `http://myserver/api/${lookup}/${id}`

  expect(url).toBe("http://myserver/api/customerLookup/id")
}

```
- [Tagged templates](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tagged-templates) can transform strings in interesting ways:

```javascript
let x = 1;
let y = 2;
var result = upper `${x} + ${y} is ${x+y}`;
//outputs "1 + 2 IS 3"
```
- custom tags, localization and html encoding to help prevent XSS attacks are possible.
- A DSL that returns structured data types can also be built.

##Classes

Underneath the covers Classes are still built with prototypes.

```javascript
class Employee{
  doWork() {
    return "working";
  }
}

//is equivalent to

var Employee = function() {

}

Employee.prototype = {
    doWork: function() {
    return "working";
  }
}

//both are instantiated and run via:
var employee = new Employee();
employee.doWork();
```

###More on classes

- Constructors

```javascript
var Employee = function() {
    var constructor(){//cstor invoked by new
        this._name;//this is required to specify the object owns _name not the current scope.
    }

    getName(){
      return this._name;
    }
}
```
-Get/set is supported.  change getName() above to:

```javascript
get name(){

}
//accessible as employee.name
```
- Inheritance is supported via:

```javascript
class Employee extends Person {

}
```
- Implicit inheritance to Object

##Overrides

- Access the Person class with "super"

```javascript
class Employee extends Person {
  doWork() {
    //super();//optionally call Superclass
    //by default using super() will invoke method
    //by the same name in superclass
    //Or override Superclass.doWork()
    return "did something";
  }
}
```
##Functional Programming

- forEach: Allows passing in a function
- map: Similar to Select in C#.  Can transform data by passing in a function.

##Arrows

- => has a lexical binding to this.  Meaning we no longer have to use the trick:

```javascript
//old way
it('this is self in a closure', function(done) {
  var self = this;
  self.name = "Brian";

  setTimeout(() => this{
    expect(self.name).toBe("Brian");
    done();
  }, 15);
});

//new way
it('lexically binds to this', function(done) {
  this.name = "Brian"

  setTimeout(() => this{
    expect(this.name).toBe("Brian");
    done();
  }, 15);
});
```
##Iterators

```javascript
//Low level example
let sum = 0;
let numbers = [1,2,3,4];
let iterator = numbers.values();
let next = iterator.next();
while(next.done){
  sum += next.value;
  next = iterator.next();
}
```
- for of similar to C#'s foreach.  Works with iterators that have no length and no known end.

```javascript
for(let n of numbers){
  console.log(n);
}
```

##Generators

- Generators are functions that create iterators.

```javascript
let numbers = function*(){
  yield 1;
  yield 2;
  yield 3;
}
```
##Comprehensions

-terse syntax for building arrays and generators.

```javascript
//Array comprehension syntax
var numbers = [for(n of [1,2,3]) n * n];
expect(numbers).toEqual(1,4,9);

//Array comp. with predicate
var numbers3 = [for (n of [1,2,3]) if(n > 1) n * n];
expect(numbers3).toEqual([4,9]);

//Generator syntax
var numbers3 = (for (n of [1,2,3]) n * n);
expect(Array.from(numbers3)).toEqual([1,4,9]);

//yield Generation
yield* (for (item of items) if(predicate(item)) item);
```

- Use Array comprehension when you want to be lazy.


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
