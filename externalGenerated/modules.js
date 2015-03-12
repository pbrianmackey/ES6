"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Employee = exports.Employee = (function () {
  function Employee(name) {
    _classCallCheck(this, Employee);

    this._name = name;
  }

  _createClass(Employee, {
    name: {
      get: function () {
        return this._name;
      }
    },
    doWork: {
      value: function doWork() {
        return "" + this._name + " works";
      }
    }
  });

  return Employee;
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});