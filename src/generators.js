//require('babel/polyfill');

  describe("how Generators work", function() {
  	it("will allow generator functions", function() {
			/*function * numbers() {
        yield 1;
        yield 2;
        yield 3;
      };*/

      let numbers = {
        [Symbol.iterator]:function*(){
            yield 1;
            yield 2;
            yield 3;
          }
      };

      let sum = 0;

      for(let num of numbers){
        sum += num;
      }
      
      expect(sum).toBe(6);
    });
  });
