"use strict";

//require('babel/polyfill');

describe("how Generators work", function () {
  it("will allow generator functions", function () {
    /*function * numbers() {
         yield 1;
         yield 2;
         yield 3;
       };*/

    var numbers = (function () {
      var _numbers = {};
      _numbers[Symbol.iterator] = regeneratorRuntime.mark(function callee$3$0() {
        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return 1;

            case 2:
              context$4$0.next = 4;
              return 2;

            case 4:
              context$4$0.next = 6;
              return 3;

            case 6:
            case "end":
              return context$4$0.stop();
          }
        }, callee$3$0, this);
      });
      return _numbers;
    })();

    var sum = 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        sum += num;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    expect(sum).toBe(6);
  });
});