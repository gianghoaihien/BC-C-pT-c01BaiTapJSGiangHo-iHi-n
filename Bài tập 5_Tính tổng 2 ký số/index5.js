// xử lý sự kiện onclick
document.getElementById("btnPlus").onclick = function () {
  var number = +document.getElementById("number").value;

  var sum = 0;
  sum1 = number % 10;
  sum2 = Math.floor(number / 10);
  sum = sum1 + sum2;
  document.getElementById("result").innerHTML = sum;
};
