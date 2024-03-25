const buttons = document.querySelectorAll("button");

buttons.forEach((button, index) => {
  let index1 = index + 1 > 2 ? 0 : index + 1;
  let index2 = index + 2 > 2 ? (index + 1 > 2 ? 1 : 0) : index + 2;
  button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {
      if (buttons[index1].classList.contains("active")) {
        buttons[index2].classList.remove("active");
      }
      button.classList.add("active");
    } else if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
});
