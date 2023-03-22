const menorValor = 1;
const maiorValor = 50;
const numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
let tentativasRestantes = 5;

const elementoTentativas = document.getElementById("tentativas")
const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
elementoTentativas.innerHTML = tentativasRestantes;


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}