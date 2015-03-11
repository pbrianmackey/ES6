"use strict";

describe("using Arrows", function () {
  it("will show how this works in ES5", function (done) {
    //let self = this;
    //self.name = "Brian";

    this.name = "Brian";

    /*(function() {
      expect(this.name).toBe("");
    })();*/

    //Create an asynchronous callback.
    setTimeout(function () {
      //expect(self.name).toBe("Brian");
      expect(this.name).toBe("");

      //instruct jasmine that beforeEach() has terminated and
      //it is now safe to continue with the it() function.
      done();
    }, 15);

    expect(this.name).toBe("Brian");
  });
});

describe("using Arrows", function () {
  it("will create lexical this", function (done) {
    var _this = this;

    this.name = "Brian";

    setTimeout(function () {
      expect(_this.name).toBe("Brian");
      done();
    }, 15);

    expect(this.name).toBe("Brian");
  });
});