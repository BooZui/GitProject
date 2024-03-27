let num = parseFloat(prompt("Enter a number: "));
let total = 0;
while( num != -1 ) {
  alert(num);
  total += num;
  num = parseFloat(prompt("Enter a number: "));
} 

alert(total);

let i = 1;

while (i < 100) {
    document.write("<hr width = " + i + "%>");
    i++;
}