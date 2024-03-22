let number = parseInt(prompt("Enter a count."));

let i = 2;
let count = 0;
const div = document.querySelector('div');


while (count < number) {
  let check = true;
  for(let j = 2; j < Math.sqrt(i) + 0.01; j++) {
    if(i % j == 0) {
      check = false;
      break;
    };
  }

  if(check) {
    count++;
    div.innerHTML += i + ", "
  }
  i++;
}