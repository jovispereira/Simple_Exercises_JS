var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10; 
function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio+20, 'red');
    desenhaCirculo(x, y, raio+10, 'white');
    desenhaCirculo(x, y, 10, 'red');
}

function sorteiaPosicao(maximo) {
    return Math.random() * (maximo - 0) + 0;
}

var xAleatorio;
var yAleatorio;
function atualizaTela() {
    limpaTela()
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);
}

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if ((x > xAleatorio - raio) 
        && (x < xAleatorio + raio) 
        && (y < yAleatorio + raio) 
        && (y > yAleatorio - raio)) {
        alert('Acertou!')
    }
}

atualizaTela();
setInterval(atualizaTela, 2000);
tela.onclick = dispara;


    

