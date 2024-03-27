let numbers = [
  [12, 4, 5, 9],
  [2, 5, 3, 2],
  [1, 2, 1, 8],
  [3, 5, 6, 8]
];

let sum = 0;

numbers = numbers.flat();

for (let i = 0; i < numbers.length; i += 5) {
  sum += numbers[i];
}

console.log(sum);