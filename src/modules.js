describe("how modules work", function(arg) {
  it("will organize code into a single unit", function() {
		//old way IIFE.  Immediately invoked functional expression
		let input = {};

		(function(arg){
			//expect(arg).toBe("helo arg");

			console.log(arg);

			var privateMethodScopedToFunction = function(name){
				return name + " worked";
			};

			var Employee = function(_name){
				this.name = _name;
			};

			Employee.prototype = {
				doWork: function() {
					return privateMethodScopedToFunction(this.name);
				}
			};

			arg.Employee = Employee;

		})(input);

		var e1 = new input.Employee("Brian")

		expect(e1.name).toBe("Brian");
	});
});
