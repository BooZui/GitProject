let x = 17;

function isPrime(num) {
  for (var i = 2; i < num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function sumOfListPrime(target) {
  if (target <= 1) {
    return 0;
  }

  let sum = 0;
  for (let i = 2; i <= target; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfListPrime(x));