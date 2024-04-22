let arr = [2, 5, 3, 5];

function findAvg(arr) {
  let length = arr.length;
  let sum = 0;

  arr.forEach((value) => {
    sum += value;
  })

  return sum / length;
}

console.log(findAvg(arr));