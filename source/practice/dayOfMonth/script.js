const month = document.getElementById("month").value;

function check() {
  switch (parseInt(month)) {
    case 1:
      console.log("31 ngày.");
      break;
    case 2:
      console.log("28 ngày.");
      break;
    case 3:
      console.log("31 ngày.");
      break;
    case 4:
      console.log("30 ngày.");
      break;
    case 5:
      console.log("31 ngày.");
      break;
    case 6:
      console.log("30 ngày.");
      break;
    case 7:
      console.log("31 ngày.");
      break;
    case 8:
      console.log("31 ngày.");
      break;
    case 9:
      console.log("30 ngày.");
      break;
    case 10:
      console.log("31 ngày.");
      break;
    case 11:
      console.log("30 ngày.");
      break;
    case 12:
      console.log("31 ngày.");
      break;
    default:
  }
}
