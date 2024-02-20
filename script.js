const dailpad = document.querySelector(".arithmetic-btns");
const keys = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", ".", "0", "=", "+"];
for (let i = 0; i < 16; i++) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = keys[i];
  dailpad.appendChild(btn);

}
