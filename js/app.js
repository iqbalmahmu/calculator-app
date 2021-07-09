class Calculator {
  constructor(previusButton, currentButton) {
    this.previusButton = previusButton;
    this.currentButton = currentButton;
    this.clear();
  }

  clear() {
    this.currentOparand = "";
    this.previusOparand = "";
    this.oparation = undefined;
  }

  delate() {}

  appendNumber(number) {
    if (number === "." && this.currentOparand.includes(".")) {
      return;
    }
    this.currentOparand = this.currentOparand.toString() + number.toString();
  }

  choseOpartion(oparation) {
    this.oparation = oparation;
  }

  compute() {}

  updateDisplay() {
    this.currentButton.innerText = this.currentOparand;
  }
}

const numberButton = document.querySelectorAll("[data-number]");

const oparandButton = document.querySelectorAll("[data-oparand]");

const equalButton = document.querySelector("[data-equal]");

const allClearButton = document.querySelector("[data-all-clear]");

const delateButton = document.querySelector("[data-delate]");

const clearButton = document.querySelector("[data-clear]");

const previusButton = document.querySelector("[data-previus-oparand]");

const currentButton = document.querySelector("[data-current-oparand]");

// create new object base on our classCallCheck

const calculator = new Calculator(previusButton, currentButton);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

oparandButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.choseOpartion(button.innerText);
    calculator.updateDisplay();
  });
});
