document.getElementById("btnTrungBinh").onclick = function () {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;
  var input5 = document.getElementById("input5").value;

  var trungbinh = 0;
  trungbinh = (+input1 + +input2 + +input3 + +input4 + +input5) / 5;
  console.log("trungbinh: ", trungbinh);
  document.getElementById("trungbinh").innerHTML = trungbinh;
};
