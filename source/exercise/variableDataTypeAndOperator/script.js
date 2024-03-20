const lesson1 = document.getElementById('lesson_1');
const lesson2 = document.getElementById('lesson_2');
const lesson3 = document.getElementById('lesson_3');
const lesson4 = document.getElementById('lesson_4');

const inputs = lesson1.querySelectorAll('input');
const cElement = document.getElementById('c');
const radius = document.getElementById('radius');

let sum = 0;


function result() {
  inputs.forEach(element => {
    sum += parseFloat(element.value);
  });
  const result = document.createElement('div')
  result.innerHTML = `Kết quả là: ${sum / 3} điểm.`
  lesson1.appendChild(result)
}

function f() {
  let c = parseFloat(cElement.value);
  let f = 9 * c / 5 + 32;
  const result = document.createElement('div');
  result.innerHTML = `Kết quả là: ${f} độ F.`;
  lesson2.appendChild(result);
}

function area() {
  let r = parseFloat(radius.value);
  let area = Math.PI * r * r;
  const result = document.createElement('div');
  result.innerHTML = `Kết quả là: ${area} m2.`;
  lesson3.appendChild(result);
}

function perimeter() {
  let r = parseFloat(radius.value);
  let perimeter = 2 * Math.PI * r;
  const result = document.createElement('div');
  result.innerHTML = `Kết quả là: ${perimeter} m.`;
  lesson4.appendChild(result);
}