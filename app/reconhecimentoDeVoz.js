const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    verificaChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}


recognition.addEventListener('end', () => recognition.start());

/*
    Biblioteca utilizada para reconhecer a voz: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
*/
