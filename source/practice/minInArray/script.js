function minArray(arr) {
  if(arr.length == 0)
      return -1;
  let min = arr[0];

  for(let i = 1; i < arr.length; i++){
      if(arr[i] < min){
          min = arr[i];
      }
  }
  return min;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];

let arr2 = [7, 12, 6, 9, 20, 56, 89];

let arr3 = [];

let arr4 = [0, 0, 0, 0, 0, 0];

alert(`Min Array1: ${minArray(arr1)}`);
alert(`Min Array2: ${minArray(arr2)}`);
alert(`Min Array3: ${minArray(arr3)}`);
alert(`Min Array4: ${minArray(arr4)}`);