function verificaChutePossuiValorValido(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {

        if(chute.toUpperCase() === "GAME OVER.") {
            document.body.innerHTML = `
            <h2>GAME OVER!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `

            document.body.style.background = "black";
        }
        else {
            elementoChute.innerHTML += '<div>Valor inválido!</div>';
        }
    }

    if(numeroForMaiorOuMenorPermitido(numero)) {
        tentativas++;
        tentativasRestantes--;
        elementoChute.innerHTML += `<div>
        Valor inválido! Fale um  número entre ${menorValor} e ${maiorValor}
        </div>
        <h4>Você tem ${tentativasRestantes} tentativas</h4>
        `
        return;
    }

    if(numero === numeroSecreto) {
        tentativas++;
        tentativasRestantes--;
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <h4 id="tentativas" class="tentativas">Você acertou em ${tentativas} tentativas</h4>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
         `
    }

    else if(numero > numeroSecreto) {
        tentativas++;
        tentativasRestantes--;
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>
        <h4 id="tentativas" class="tentativas">Você tem ${tentativasRestantes} tentativas</h4>
        `
    }
    else {
        tentativas++;
        tentativasRestantes--;
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>
        <h4 id="tentativas" class="tentativas">Você tem ${tentativasRestantes} tentativas</h4>
        `
    }
     
    if(tentativas >= 5 && numero !== numeroSecreto) {
        document.body.innerHTML = `
        <h2>GAME OVER!!!</h2>
        <h3>O número secreto é: ${numeroSecreto}</h3>
        <h4>Você perdeu o jogo :(</h4>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.background = "black";
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});

