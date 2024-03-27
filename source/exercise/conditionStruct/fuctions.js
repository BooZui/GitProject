export function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

export function meterToFeet(meter) {
  return meter * 3.2808;
}

export function squareArea(a) {
  return a * a;
}

export function rectangleArea(a, b) {
  return a * b;
}

export function triangleArea(a, b) {
  return (a * b) / 2;
}

export function solveLinearEquation(a, b) {
  if (a === 0) {
    if (b === 0) {
      alert("Phương trình vô số nghiệm");
    } else {
      alert("Phương trình vô nghiệm");
    }
  } else {
    const x = -b / a;
    alert(`Nghiệm của phương trình là x = ${x}`);
  }
}

export function solveQuadraticEquation(a, b, c) {
  const delta = b * b - 4 * a * c;

  if(a = 0) {
    solveLinearEquation(b, c);
    return;
  }

  if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Phương trình có hai nghiệm x1 = ${x1} và x2 = ${x2}`);
  } else if (delta === 0) {
    const x = -b / (2 * a);
    alert(`Phương trình có nghiệm kép x = ${x}`);
  } else {
    alert("Phương trình vô nghiệm");
  }
}

export function isValidAge(age) {
  return age > 0 && age < 120;
}

export function isTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b;
}

const leverElecs = [50, 50, 100, 100, 100];
const leverMoneys = [1678, 1734, 2014, 2536, 2834, 2927]

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currencyDisplay:'symbol',
  separator: ',',
  currency: 'VND'
})

export function elecBill(elecCount) {
  let money = 0;
  let i = 0;

  while (elecCount >= leverElecs[i] && leverElecs[i]) {
    money += leverElecs[i] * leverMoneys[i] *1.08;
    elecCount -= leverElecs[i];
    i++;
  }

  if (elecCount <= 0) {
    let result = VND.format(money.toFixed()).slice(0, -1) + "đồng.";
    return result;
  }

  money += elecCount * leverMoneys[i] *1.08;

  let result = VND.format(money.toFixed()).slice(0, -1) + " đồng.";
  return result;
}

export function IIT(money) {
  if (money <= 5) return money * 0.05;
  else if (money <= 10) return money * 0.1 - 0.25;
  else if (money <= 18) return money * 0.15 - 0.75;
  else if (money <= 32) return money * 0.2 - 1.65;
  else if (money <= 52) return money * 0.25 - 3.25;
  else if (money <= 80) return money * 0.3 - 5.85;
  else return money * 0.35 - 9.85;
}

export function moneyOut(moneyIn, month, percents) {
  for (let i = 0; i < month; i++) {
    moneyIn += moneyIn * percents / 100;
  }
  return moneyIn;
}