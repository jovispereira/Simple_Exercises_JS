var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

function desenhaQuadradoColorido(inicioX, inicioY, finalX, finalY, corQuadrado, corBorda) {
    pincel.fillStyle = corQuadrado;
    pincel.fillRect(inicioX, inicioY, finalX, finalY);
    pincel.fillStroke = "black"
    pincel.strokeStyle = corBorda;
    pincel.strokeRect(inicioX, inicioY, finalX, finalY);
}

desenhaQuadradoColorido(0,0,50,50,"green","black");
desenhaQuadradoColorido(50,0,50,50,"blue","red");

