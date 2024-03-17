const lastElecUsed = document.getElementById("lastElecUsed");
const elecUsed = document.getElementById("elecUsed");
const elecCount = document.getElementById("elecCount");
const button = document.getElementById("button");
const result = document.getElementById("result");

lastElecUsed.addEventListener("change", (changeElecCount));

elecUsed.addEventListener("change", (changeElecCount));

elecCount.addEventListener("change", () => {
  if (elecCount.value) {
    lastElecUsed.disabled = "true";
    elecUsed.disabled = "true";
  } else {
    lastElecUsed.removeAttribute("disabled");
    elecUsed.removeAttribute("disabled");
  }
});

button.addEventListener("click", () => {
  elecBill(elecCount.value);
});

function changeElecCount(element) {
  if (element.target.value) elecCount.disabled = "true";
  else elecCount.removeAttribute("disabled");
  elecCount.value = parseFloat(elecUsed.value) - parseFloat(lastElecUsed.value);
  if (elecCount.value === "NaN") elecCount.value = '';
}

const leverElecs = [50, 50, 100, 100, 100];
const leverMoneys = [1678, 1734, 2014, 2536, 2834, 2927]

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currencyDisplay:'symbol',
  separator: ',',
  currency: 'VND'
})

function elecBill(elecCount) {
  let money = 0;
  let i = 0;

  while (elecCount >= leverElecs[i] && leverElecs[i]) {
    money += leverElecs[i] * leverMoneys[i] *1.08;
    elecCount -= leverElecs[i];
    i++;
  }

  if (elecCount <= 0) {
    result.value = VND.format(money.toFixed()).slice(0, -1) + "đồng.";
    return;
  }

  money += elecCount * leverMoneys[i] *1.08;

  result.value = VND.format(money.toFixed()).slice(0, -1) + " đồng.";
}