class Calculator {
  constructor(previusOparandTextElement, currentOparandTextElement) {
    this.previusOparandTextElement = previusOparandTextElement;
    this.currentOparandTextElement = currentOparandTextElement;
  }

  clear() {
    this.currentOparand = "";
    this.previusOparand = "";
    this.oparation = undefined;
  }

  delate() {}

  appendNumber(number) {}

  choseOpartion(oparation) {}

  compute() {}

  updateDisplay() {}
}

const numberButton = document.querySelectorAll("[data-number]");

const oparandButton = document.querySelectorAll("[data-oparand]");

const equalButton = document.querySelector("[data-equal]");

const allClearButton = document.querySelector("[data-all-clear]");

const delateButton = document.querySelector("[data-delate]");

const clearButton = document.querySelector("[data-clear]");

const previusButton = document.querySelector("[data-previus-oparand]");

const currentButton = document.querySelector("[data-current-oparand]");
