function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  
  if (weight === "" || height === "") {
    alert("Please enter both weight and height.");
    return;
  }
  
  const bmi = weight / Math.pow(height / 100, 2);
  const bmiResult = document.getElementById("bmiResult");
  
  let interpretation;
  if (bmi < 18.5) {
    interpretation = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    interpretation = "Overweight";
  } else {
    interpretation = "Obese";
  }
  
  bmiResult.innerHTML = `Your BMI is: ${bmi.toFixed(2)} - ${interpretation}`;
}
