describe("how modules work", function() {
  it("will organize code into a single unit", function() {
		//old way IIFE.  Immediately invoked functional expression

		let input = {};
		(function(input){
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

			input.Employee = Employee;

		})(input);

		var e1 = new input.Employee("Brian")

		expect(e1.name).toBe("Brian");
	});
});
