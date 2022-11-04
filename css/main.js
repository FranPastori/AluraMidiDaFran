function tocaSom(idDoElementoAudio){
    document.querySelector(idDoElementoAudio).play();

}

const listaTeclas= document.querySelectorAll('.tecla');

var contador = 0 

while (contador< listaTeclas.length) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = ` #som_${instrumento}`;
    console.log(idAudio);
    tecla.onclick = function () { tocaSom();}

    contador++;

}