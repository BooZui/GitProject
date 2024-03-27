import { celsiusToFahrenheit, isTriangle, isValidAge, meterToFeet, rectangleArea, solveLinearEquation, solveQuadraticEquation, squareArea, triangleArea, elecBill, IIT, moneyOut } from "./fuctions.js";

let target = parseFloat(prompt("Enter a lesson"))

switch (target) {
  case 1: {
    let celsius = parseFloat(prompt("Nhập nhiệt độ C"));
    alert(celsiusToFahrenheit(celsius) + " Độ F");
    break;
  }
  case 2: {
    let meters = parseFloat(prompt("Nhập độ dài."));
    alert(meterToFeet(meters) + " Feet.");
    break;
  }
  case 3: {
    let a = parseFloat(prompt("Nhập cạnh hình vuông."));
    alert("Diện tích là: " + squareArea(a));
    break;
  }
  case 4: {
    let a = parseFloat(prompt("Nhập chiều dài hình chữ nhật."));
    let b = parseFloat(prompt("Nhập chiều rộng hình chữ nhật."));
    alert("Diện tích là: " + rectangleArea(a, b));
    break;
  }
  case 5: {
    let a = parseFloat(prompt("Nhập cạnh hình Tam giac vuông."));
    let b = parseFloat(prompt("Nhập cạnh tiếp theo."));
    alert("Diện tích là: " + triangleArea(a, b));
    break;
  }
  case 6: {
    let a = parseFloat(prompt("Nhập a."));
    let b = parseFloat(prompt("Nhập b."));
    solveLinearEquation(a, b);
    break;
  }
  case 7: {
    let a = parseFloat(prompt("Nhập a."));
    let b = parseFloat(prompt("Nhập b."));
    let c = parseFloat(prompt("Nhập c."));
    solveQuadraticEquation(a, b, c);
    break;
  }
  case 8: {
    let age = parseFloat(prompt("Nhập tuổi."));
    alert(`Tuổi ${age} ${isValidAge(age) ? "hợp lệ." : "không hợp lệ."}`);
    break;
  }
  case 9: {
    let a = parseFloat(prompt("Nhập a."));
    let b = parseFloat(prompt("Nhập b."));
    let c = parseFloat(prompt("Nhập c."));
    alert(`Ba cạnh ${isTriangle(a, b, c) ? "là cạnh tam giác." : "không phải là cạnh tam giác."}`)
    break;
  }
  case 10: {
    let money = parseFloat(prompt("Nhập số điện."));
    alert(elecBill(money))
    break;
  }
  case 11: {
    let money = parseFloat(prompt("Nhập số tiền thu nhập."));
    alert(`Thuế của bạn là ${IIT(money)} triệu đồng.`);
    break;
  }
  case 12: {
    let money = parseFloat(prompt("Nhập số tiền."));
    let month = parseFloat(prompt("Nhập số tháng."));
    let percents = parseFloat(prompt("Nhập phần trăm lãi suất."));
    alert(moneyOut(money, month, percents) + "Đồng.");
    break;
  }
  default: {
    alert("Không phải là phép tính.");
    break;
  }
}