describe("how Functional Programming works", function() {
  it("will allow generators and arrows to work together", function() {

    class Company{
      constructor(){
          this.employees = [];
      }

      addEmployees(...names){
        this.employees = this.employees.concat(names);
      }
      *getEmployees(){
          for(let e of this.employees){
            yield e;
          }
        }
    }

    //Generator function called filter.
    let filter = function *(items, predicate){
        for(let item of items){
          if(predicate(item)){
            yield item;
          }
        }
    }

    let sum = 0;
    let company = new Company();
    company.addEmployees("Bob", "Sam", "Brian", "Jones")

		//Count the number of employees whose name starts with "B"
    for(let num of filter(company.getEmployees(), e => e[0] == "B")){
      sum += 1;
    }

    expect(sum).toBe(2);
  });
});
