"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

describe("using default parameters", function () {
  it("Classes allow default params", function () {
    var Employee = (function () {
      function Employee() {
        var name = arguments[0] === undefined ? "Judy" : arguments[0];

        _classCallCheck(this, Employee);

        this._name = name;
      }

      _createClass(Employee, {
        getPaid: {
          value: function getPaid() {
            return "you got paid!";
          }
        }
      });

      return Employee;
    })();

    ;

    var e1 = new Employee();
    expect(e1._name).toBe("Judy");

    expect(e1.getPaid()).toBe("you got paid!");
  });
});