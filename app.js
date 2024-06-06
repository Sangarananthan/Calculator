const buttons = document.querySelectorAll(".btn");
const equal = document.querySelectorAll(".equal");
const textfield = document.querySelector(".inputfield");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText == "C") {
      textfield.innerText = "";
    } else if (button.innerText == "=") {
      try {
        textfield.innerText = eval(textfield.innerText);
      } catch {
        textfield.innerText = "Error";
      }
    } else {
      textfield.innerText = `${textfield.innerText}${button.innerText}`;
    }
  });
});
