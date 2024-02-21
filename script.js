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
let firstOperand = 0;
let secondOperand = 0;
let calculation = 0;
let operator = null;
function appendNumber(operand) {
  switch (operand) {
    case "1":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "2":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "3":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "4":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "5":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "6":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "7":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "8":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "9":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
    case "0":
      firstOperand = firstOperand * 10 + parseInt(operand);
      break;
  }
  console.log(firstOperand);
}
// window.addEventListener("keydown", function (e) {
//   const button = this.document.querySelector(`button[data-key="${e.key}"]`);
//   console.log(button);
// });
const btn = document.querySelectorAll("button");
btn.forEach((e) => {
  e.addEventListener("click", (ev) => {
    appendNumber(ev.target.textContent);
    document.querySelector(".output").textContent = firstOperand;
  });
});
