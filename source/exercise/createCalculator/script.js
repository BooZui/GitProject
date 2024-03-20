let target = 0;
let result = "";
let displayResult;
let preOperator = 0;
let operator;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isNaN(button.value)) handSymbol(button.value);
    else {
      if (result.length === 1 && result[0] === "0") result = "";
      result += button.value;
      display.innerHTML = result;
    }
  });
});

function handSymbol(buttonValue) {
  switch (buttonValue) {
    case "C":
      result = "0";
      preOperator = 0;
      displayResult = 0;
      display.innerHTML = result;
      break;

    case ".":
      result += ".";
      display.innerHTML = result;
      break;

    case "<":
      result = result.slice(0, -1);
      if (result.length === 0) {
        result = "0";
      }
      display.innerHTML = result;
      break;

    case "+":
      preOperator = parseFloat(result);
      target += preOperator;
      result = "0";
      display.innerHTML = result;
      operator = "+";
      break;

    case "-":
      preOperator = parseFloat(result);
      if (operator) target -= preOperator;
      else target = preOperator;
      result = "0";
      display.innerHTML = result;
      operator = "-";
      break;

    case "*":
      preOperator = parseFloat(result);
      if (operator) target *= preOperator;
      else target = preOperator;
      result = "0";
      display.innerHTML = result;
      operator = "*";
      break;

    case "/":
      preOperator = parseFloat(result);
      if (operator) target /= preOperator;
      else target = preOperator;
      result = "0";
      display.innerHTML = result;
      operator = "/";
      break;

    case "=":
      handSymbol(operator);
      result = target;
      target = 0;
      display.innerHTML = result;
      result = "0";
      operator = "";
      break;

    default:
  }
}
