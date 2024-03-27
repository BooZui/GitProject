let numbers = [
  [12, 4, 5, 9],
  [2, 5, 3, 2],
  [1, 2, 1, 8]
];

let sum = 0;

numbers.forEach((array) => {
  array.forEach((number) => {
    number % 2 ==0 ? sum += number : sum += 0;
  })
});

console.log(sum);