// Bai 1:
function checkDivisible(a, b) {
  if (a % b === 0) {
    alert(`${a} is divisible by ${b}`);
  } else {
    alert(`${a} is not divisible by ${b}`);
  }
}

const number1 = parseInt(prompt("Enter number a: "));
const number2 = parseInt(prompt("Enter number b: "));

checkDivisible(number1, number2);

// Bai 2:
function checkAge(age) {
  if (age < 15) {
    alert("Not eligible to join grade 10.");
  } else {
    alert("Eligible to join grade 10.");
  }
}

const studentAge = parseInt(prompt("Enter student's age: "));

checkAge(studentAge);

// Bai 3:
function checkNumber(number) {
  if (number > 0) {
    alert(`${number} is greater than 0.`);
  } else if (number < 0) {
    alert(`${number} is less than 0.`);
  } else {
    alert(`${number} is equal to 0.`);
  }
}

const enteredNumber = parseInt(prompt("Enter a number: "));

checkNumber(enteredNumber);

// Bai 4:
function findLargest(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}

const num1 = parseInt(prompt("Enter number a: "));
const num2 = parseInt(prompt("Enter number b: "));
const num3 = parseInt(prompt("Enter number c: "));

const maxNumber = findLargest(num1, num2, num3);

alert("Largest number:", maxNumber);

// Bai 5:
function calculateGrade(bk, gk, ck) {
  const totalWeight = 1 + 2 + 3;
  const averageScore = (bk + gk * 2 + ck * 3) / totalWeight;

  let grade;
  if (averageScore >= 9) {
    grade = "Excellent";
  } else if (averageScore >= 8) {
    grade = "Good";
  } else if (averageScore >= 7) {
    grade = "Average";
  } else if (averageScore >= 5) {
    grade = "Pass";
  } else {
    grade = "Fail";
  }
  return grade;
}

const bkScore = parseFloat(prompt("Enter quiz score: "));
const gkScore = parseFloat(prompt("Enter mid-term score: "));
const ckScore = parseFloat(prompt("Enter final exam score: "));

const studentGrade = calculateGrade(bkScore, gkScore, ckScore);

alert("Student's grade:", studentGrade);

// Bai 6:
function calculateCommission(sales) {
  let commission;
  if (sales <= 10000000) {
    commission = sales * 0.05;
  } else if (sales <= 20000000) {
    commission = 10000000 * 0.05 + (sales - 10000000) * 0.1;
  } else {
    commission = 10000000 * 0.05 + 10000000 * 0.1 + (sales - 20000000) * 0.15;
  }
  return commission;
}

const totalSales = parseFloat(prompt("Enter total sales: "));

const earnedCommission = calculateCommission(totalSales);

alert("Commission earned:", earnedCommission.toFixed(2));