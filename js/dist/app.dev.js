"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previusButton, currentButton) {
    _classCallCheck(this, Calculator);

    this.previusButton = previusButton;
    this.currentButton = currentButton;
    this.clear();
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
    value: function appendNumber(number) {
      if (number === "." && this.currentOparand.includes(".")) {
        return;
      }

      this.currentOparand = this.currentOparand.toString() + number.toString();
    }
  }, {
    key: "choseOpartion",
    value: function choseOpartion(oparation) {
      this.oparation = oparation;
    }
  }, {
    key: "compute",
    value: function compute() {}
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.currentButton.innerText = this.currentOparand;
    }
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
var currentButton = document.querySelector("[data-current-oparand]"); // create new object base on our classCallCheck

var calculator = new Calculator(previusButton, currentButton);
numberButton.forEach(function (button) {
  button.addEventListener("click", function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
oparandButton.forEach(function (button) {
  button.addEventListener("click", function () {
    calculator.choseOpartion(button.innerText);
    calculator.updateDisplay();
  });
});