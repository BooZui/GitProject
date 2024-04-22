let arr = [2, 5, 3, 2]

function insertNumberToArray(arr, value, index) {
  let length = arr.length;

  if (index < 0 || index > length) return arr;

  let newArr = [...arr.slice(0, index), value, ...arr.slice(index)];

  return newArr;
}

console.log(insertNumberToArray(arr, 10, 2));