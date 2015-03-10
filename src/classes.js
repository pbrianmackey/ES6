describe("using Classes", function() {
	it("will allow OO through prototypal inheritance", function() {
		  let Employee = function(name) {
          this._name = name;
      };

      Employee.prototype.getPaid = function getPaid() {
          return "you got paid!"
      };

      let e1 = new Employee("Brian");
      expect(e1._name).toBe("Brian");

      expect(e1.getPaid()).toBe("you got paid!")
	});
});

describe("using Classes", function() {
	it("will allow classical OO", function() {
		  class Employee {
          constructor(name){
            this._name = name;
          }

          getPaid(){
            return "you got paid!"
          }
      };

      let e1 = new Employee("Brian");
      expect(e1._name).toBe("Brian");

      expect(e1.getPaid()).toBe("you got paid!")
	});
});
