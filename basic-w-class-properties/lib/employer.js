"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Employer = function Employer(n) {
  var _this = this;

  _classCallCheck(this, Employer);

  _defineProperty(this, "name", "john");

  _defineProperty(this, "saymyname", function () {
    console.log("my name is " + _this.name);
  });

  this.name = n;
};