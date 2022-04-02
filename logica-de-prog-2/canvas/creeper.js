var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "darkgreen";
pincel.fillRect(0, 0, 350, 300);

pincel.fillStyle = "black";
pincel.fillRect(50, 55, 90, 90);
pincel.fillRect(210, 55, 90, 90);
pincel.fillRect(140, 145, 70, 100);
pincel.fillRect(100, 200, 40, 110);
pincel.fillRect(210, 200, 40, 110);
