describe("using default parameters", function() {
	it("Classes allow default params", function() {
		  class Employee {
          constructor(name = "Judy"){
            this._name = name;
          }

          getPaid(){
            return "you got paid!"
          }
      };

      let e1 = new Employee();
      expect(e1._name).toBe("Judy");

      expect(e1.getPaid()).toBe("you got paid!")
	});
});
