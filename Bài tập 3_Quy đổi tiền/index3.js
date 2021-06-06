// Quy đổi tiền tệ

document.getElementById("btnChange").onclick = function () {
  var money = document.getElementById("money").value;
  var typeMoney = document.getElementById("typeMoney").value;
  var moneyChanger = 0;

  switch (typeMoney) {
    case "VNĐ": {
      moneyChanger = money * 23500;
      break;
    }
    case "GBP": {
      moneyChanger = money * 0.71;
      break;
    }
    case "JPY": {
      moneyChanger = money * 108.82;
      break;
    }
    default:
      break;
  }

  document.getElementById("tongtien").innerHTML = moneyChanger;
};
