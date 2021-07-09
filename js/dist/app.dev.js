"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previusOparandTextElement, currentOparandTextElement) {
    _classCallCheck(this, Calculator);

    this.previusOparandTextElement = previusOparandTextElement;
    this.currentOparandTextElement = currentOparandTextElement;
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOparand = "";
      this.previusOparand = "";
      this.oparation = undefined;
    }
  }, {
    key: "delate",
    value: function delate() {}
  }, {
    key: "appendNumber",
    value: function appendNumber(number) {}
  }, {
    key: "choseOpartion",
    value: function choseOpartion(oparation) {}
  }, {
    key: "compute",
    value: function compute() {}
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {}
  }]);

  return Calculator;
}();

var numberButton = document.querySelectorAll("[data-number]");
var oparandButton = document.querySelectorAll("[data-oparand]");
var equalButton = document.querySelector("[data-equal]");
var allClearButton = document.querySelector("[data-all-clear]");
var delateButton = document.querySelector("[data-delate]");
var clearButton = document.querySelector("[data-clear]");
var previusButton = document.querySelector("[data-previus-oparand]");
var currentButton = document.querySelector("[data-current-oparand]");