const lastWaterUsed = document.getElementById("lastWaterUsed");
const waterUsed = document.getElementById("waterUsed");
const waterCount = document.getElementById("waterCount");
const people = document.getElementById("people");
const button = document.getElementById("button");
const result = document.getElementById("result");
const cities = document.querySelectorAll("#citySelect input");
const types = document.querySelectorAll("#type input");

const leverWaterBill = [
  [
    [[6700], [12900], [14400]],
    [[6300], [12900], [14400]],
    [[0]],
    [[13000]],
    [[12100]],
    [[21300]],
  ],
  [
    [[5973], [7052], [8669], [15929]],
    [[3600], [4500], [5600], [6700]],
    [[9955]],
    [[9955]],
    [[8669]],
    [[15929]],
  ],
];

let cityIndex = 0;
let typeIndex = 0;
let leverWater;

cities.forEach((city, index) => {
  city.addEventListener("change", () => {
    if (index === 0) {
      people.removeAttribute("disabled");
      types[2].disabled = "true";
    }
    else {
      people.disabled = "true";
      people.value = "";
      types[2].removeAttribute("disabled");
    }
    waterCount.value = "";
    cityIndex = index;
    leverWater = leverWaterBill[index][typeIndex];
    console.log(leverWater);
  });
});

types.forEach((type, index) => {
  type.addEventListener("change", () => {
    if (index !== 0 && index !== 1) {
      people.disabled = "true";
      people.value = "";
    }
    else people.removeAttribute("disabled");
    waterCount.value = "";
    typeIndex = index;
    leverWater = leverWaterBill[cityIndex][index];
    console.log(leverWater);
  });
});

lastWaterUsed.addEventListener("change", changeElecCount);
waterUsed.addEventListener("change", changeElecCount);
waterCount.addEventListener("change", () => {
  if (waterCount.value) {
    lastWaterUsed.disabled = "true";
    waterUsed.disabled = "true";
  } else {
    lastWaterUsed.removeAttribute("disabled");
    waterUsed.removeAttribute("disabled");
  }
});

button.addEventListener("click", () => {
  elecBill(waterCount.value);
});

function changeElecCount(element) {
  if (element.target.value) waterCount.disabled = "true";
  else waterCount.removeAttribute("disabled");
  waterCount.value =
    parseFloat(waterUsed.value) - parseFloat(lastWaterUsed.value);
  if (waterCount.value === "NaN") waterCount.value = "";
}

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currencyDisplay: "symbol",
  separator: ",",
  currency: "VND",
});

const leverWaterHCM = [4, 6];
const leverWaterHN = [10, 10, 10];

function elecBill(waterCount) {
  let money = 0;
  let i = 0;

  if (cityIndex === 0) {
    if (typeIndex === 0 || typeIndex === 1) {
      const waterPeople = waterCount / people.value;
      
      console.log(waterPeople, waterCount,people.value);

      if (waterPeople < leverWaterHCM[0]) {
        money = waterCount * leverWater[0];
      } else if (
        waterPeople >= leverWaterHCM[0] &&
        waterPeople <= leverWaterHCM[1]
      ) {
        money = waterCount * leverWater[1];
      } else {
        money = waterCount * leverWater[2];
      }
    } else {
      money = waterCount * leverWater[0];
    }
    money = money * 1.15;
    result.value = VND.format(money.toFixed()).slice(0, -1) + "đồng.";
  } else {
    if (typeIndex === 1 || typeIndex === 2) {
      while (waterCount >= leverWaterHN[i] && leverWaterHN[i]) {
        money += leverWater[i] * leverWaterHN[i] * 1.15;
        waterCount -= leverWaterHN[i];
        i++;
      }

      if (waterCount <= 0) {
        result.value = VND.format(money.toFixed()).slice(0, -1) + "đồng.";
        return;
      }

      money += waterCount * leverWater[i] * 1.15;

      result.value = VND.format(money.toFixed()).slice(0, -1) + " đồng.";
    }
    else {
      money = waterCount * leverWater[0];
      result.value = VND.format(money.toFixed()).slice(0, -1) + " đồng.";
    }
  }
}
