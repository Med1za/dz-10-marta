let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let currentText = display.innerText;
    let buttonText = e.target.innerText;

    switch (buttonText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          // Используйте более безопасный метод вычисления, если возможно
          display.innerText = eval(currentText); 
        } catch (e) {
          display.innerText = "Invalid input";
        }
        break;
      case "+/-":
        if (currentText !== "0") {
          display.innerText = (parseFloat(currentText) * -1).toString();
        }
        break;
      case "%":
        if (currentText !== "0") {
          display.innerText = (parseFloat(currentText) / 100).toString();
        }
        break;
      case ".":
        if (!currentText.includes(".")) {
          display.innerText += buttonText;
        }
        break;
      default:
        if (currentText === "0" ) {
          display.innerText = buttonText;
        } else {
          display.innerText += buttonText;
        }
    }
  });
});
