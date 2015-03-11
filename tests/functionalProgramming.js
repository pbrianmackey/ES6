"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

describe("how Functional Programming works", function () {
  it("will allow generators and arrows to work together", function () {
    var Company = (function () {
      function Company() {
        _classCallCheck(this, Company);

        this.employees = [];
      }

      _createClass(Company, {
        addEmployees: {
          value: function addEmployees() {
            for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
              names[_key] = arguments[_key];
            }

            this.employees = this.employees.concat(names);
          }
        },
        getEmployees: {
          value: regeneratorRuntime.mark(function getEmployees() {
            var _this = this;

            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e;

            return regeneratorRuntime.wrap(function getEmployees$(context$4$0) {
              while (1) switch (context$4$0.prev = context$4$0.next) {
                case 0:
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  context$4$0.prev = 3;
                  _iterator = _this.employees[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$4$0.next = 12;
                    break;
                  }

                  e = _step.value;
                  context$4$0.next = 9;
                  return e;

                case 9:
                  _iteratorNormalCompletion = true;
                  context$4$0.next = 5;
                  break;

                case 12:
                  context$4$0.next = 18;
                  break;

                case 14:
                  context$4$0.prev = 14;
                  context$4$0.t2 = context$4$0["catch"](3);
                  _didIteratorError = true;
                  _iteratorError = context$4$0.t2;

                case 18:
                  context$4$0.prev = 18;
                  context$4$0.prev = 19;

                  if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                  }

                case 21:
                  context$4$0.prev = 21;

                  if (!_didIteratorError) {
                    context$4$0.next = 24;
                    break;
                  }

                  throw _iteratorError;

                case 24:
                  return context$4$0.finish(21);

                case 25:
                  return context$4$0.finish(18);

                case 26:
                case "end":
                  return context$4$0.stop();
              }
            }, getEmployees, this, [[3, 14, 18, 26], [19,, 21, 25]]);
          })
        }
      });

      return Company;
    })();

    //Generator function called filter.
    var filter = regeneratorRuntime.mark(function filter(items, predicate) {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

      return regeneratorRuntime.wrap(function filter$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$3$0.prev = 3;
            _iterator = items[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$3$0.next = 13;
              break;
            }

            item = _step.value;

            if (!predicate(item)) {
              context$3$0.next = 10;
              break;
            }

            context$3$0.next = 10;
            return item;

          case 10:
            _iteratorNormalCompletion = true;
            context$3$0.next = 5;
            break;

          case 13:
            context$3$0.next = 19;
            break;

          case 15:
            context$3$0.prev = 15;
            context$3$0.t3 = context$3$0["catch"](3);
            _didIteratorError = true;
            _iteratorError = context$3$0.t3;

          case 19:
            context$3$0.prev = 19;
            context$3$0.prev = 20;

            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }

          case 22:
            context$3$0.prev = 22;

            if (!_didIteratorError) {
              context$3$0.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return context$3$0.finish(22);

          case 26:
            return context$3$0.finish(19);

          case 27:
          case "end":
            return context$3$0.stop();
        }
      }, filter, this, [[3, 15, 19, 27], [20,, 22, 26]]);
    });

    var sum = 0;
    var company = new Company();
    company.addEmployees("Bob", "Sam", "Brian", "Jones");

    //Count the number of employees whose name starts with "B"
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = filter(company.getEmployees(), function (e) {
        return e[0] == "B";
      })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        sum += 1;
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

    expect(sum).toBe(2);
  });
});