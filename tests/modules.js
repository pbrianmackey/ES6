"use strict";

describe("how modules work", function () {
	it("will organize code into a single unit", function () {
		//old way IIFE.  Immediately invoked functional expression

		var input = {};
		(function (input) {
			var privateMethodScopedToFunction = function privateMethodScopedToFunction(name) {
				return name + " worked";
			};

			var Employee = function Employee(_name) {
				this.name = _name;
			};

			Employee.prototype = {
				doWork: function doWork() {
					return privateMethodScopedToFunction(this.name);
				}
			};

			input.Employee = Employee;
		})(input);

		var e1 = new input.Employee("Brian");

		expect(e1.name).toBe("Brian");
	});
});

//run node in command line:  "node ./external/import.js"
//Remainder of demo must be run in Node.js
//because exports is part of the CommonJS module system.
//A packaging tool like Webpack or Browserify could let it run here.
//See https://babeljs.io/docs/using-babel/#browserify (search for Karma)