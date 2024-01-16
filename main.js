function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.keyCode)

        if (evento.keyCode === 13 || evento.keyCode === 32) {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        tecla.forEach(function(evento) {
            evento.classList.remove('ativa');
        });
    }
}

document.querySelector('.tecla_pom').style('color: red;')