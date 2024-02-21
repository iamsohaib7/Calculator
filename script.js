const dailpad = document.querySelector(".arithmetic-btns");
const keys = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "=",
  "+",
];
for (let i = 0; i < 16; i++) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = keys[i];
  btn.dataset.key = keys[i];
  dailpad.appendChild(btn);
}
let firstOperand = "";
let secondOperand = "";
let operator = "";
function appendNumber(operand) {
  firstOperand = firstOperand.concat(operand);
}
add = (a, b) => {
  return a + b;
};
subtract = (a, b) => {
  return a - b;
};
multiply = (a, b) => {
  return a * b;
};
divide = (a, b) => {
  return a / b;
};
function operate(operator, firstOperand, secondOperand) {
  let a = Number(firstOperand);
  let b = Number(secondOperand);
  switch (operator) {
    case "+":
      return add(a, b).toString();
      break;
    case "-":
      return subtract(a, b).toString();
      break;
    case "x":
      return multiply(a, b).toString();
      break;
    case "/":
      if (secondOperand === "0") {
        alert("Number can not be divided by 0");
        return firstOperand;
      } else {
        return divide(a, b).toString();
      }
      break;
    default:
      return secondOperand;
  }
}
function clear() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
}
function erase() {
  firstOperand = firstOperand.slice(0, -1);
}
window.addEventListener("keydown", function (e) {
  const button = this.document.querySelector(`button[data-key="${e.key}"]`);
  console.log(button);
});
const btn = document.querySelectorAll("button");
btn.forEach((e) => {
  e.addEventListener("click", (ev) => {
    const text = ev.target.textContent;
    console.log(`Text Clicked: ${text}`);
    if (text === "clear") {
      clear();
    } else if (text === "delete" && firstOperand !== "") {
      erase();
    } else if (text >= "0" && text <= "9") {
      appendNumber(text);
    } else {
      firstOperand = operate(operator, secondOperand, firstOperand);
      secondOperand = firstOperand;
      firstOperand = "";
      operator = text;
    }
    console.log(`first operand: ${firstOperand}, second operand: ${secondOperand}`);
    if (secondOperand !== "") {
      document.querySelector(".output").textContent = secondOperand;
    } else {
      document.querySelector(".output").textContent =
        firstOperand === "" ? "0" : firstOperand;
    }
    // if (secondOperand !== "") firstOperand = "";
  });
});
