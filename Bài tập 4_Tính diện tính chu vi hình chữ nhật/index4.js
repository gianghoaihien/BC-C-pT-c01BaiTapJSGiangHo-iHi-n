// bắt sư kiện
document.getElementById("tinh").onclick = function () {
  // lấy giá trị input
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var result = getResult();
  var output = calculate(result, length, width);
  document.getElementById("xuatKetQua").innerHTML = output;
};

//
function getResult() {
  var acreage = document.getElementById("acreage").checked;
  var perimeter = document.getElementById("perimeter").checked;
  if (acreage) {
    var result = "acreage";
  }
  if (perimeter) {
    var result = "perimeter";
  }
  return result;
}

//
function calculate(result, length, width) {
  var output = 0;
  switch (result) {
    case "acreage": {
      output = length * width + "cm2";
      break;
    }
    case "perimeter": {
      output = (+length + +width) * 2 + "cm";
      break;
    }
  }
  return output;
}
