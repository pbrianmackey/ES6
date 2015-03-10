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

##Other Cool Stuff
- [ES6 Features](https://github.com/lukehoban/es6features#symbols)
- [Compatability Chart](http://kangax.github.io/compat-table/es6/)
