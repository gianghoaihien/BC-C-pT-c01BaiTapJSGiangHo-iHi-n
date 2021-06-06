// tính tiền lương nhân viên

document.getElementById("btnTinhLuong").onclick = function () {
  var ngayCong = document.getElementById("ngayCong").value;
  var tongtienluong = 0;
  tongtienluong = 100000 * ngayCong;
  console.log("tongtienluong: ", tongtienluong);
  document.getElementById("tongtien").innerHTML = tongtienluong;
};
