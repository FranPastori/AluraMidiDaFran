function tocaSom(idDoElementoAudio) {
    document.querySelector(idDoElementoAudio).play();

}

const listaTeclas = document.querySelectorAll('.tecla');

var contador = 0

//while (contador< listaTeclas.length) {
//    const botao = listaTeclas[contador];
//    const instrumento = botao.classList[1];
//    console.log(botao);
//   console.log(instrumento);
//    const idAudio = `#som_${instrumento}`;
//    console.log(idAudio);
//    botao.onclick = function () { tocaSom(idAudio);}
//    contador++;
//}

for (let i = 0; i < listaTeclas.length; i++) {
    const botao = listaTeclas[i];
    const instrumento = botao.classList[1];
    console.log(botao);
    console.log(instrumento);
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    botao.onclick = function () { tocaSom(idAudio); }

}
