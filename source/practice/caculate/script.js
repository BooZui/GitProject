const button = document.querySelectorAll("button");
const result = document.getElementById("result");

button.forEach((pt) => {
  pt.addEventListener("click", (e) => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    console.log(a, b);
    switch (pt.innerHTML) {
      case "+":
        result.innerHTML = parseInt(a) + parseInt(b);
        break;
      case "-":
        result.innerHTML = a - b;
        break;
      case "*":
        result.innerHTML = a * b;
        break;
      case "/":
        result.innerHTML = a / b;
        break;
      default:
        result.innerHTML = "không phải là phép tính";
    }
  });
});
