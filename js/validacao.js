function verificaChute(chute) {
    const num = +chute

    if (chuteInvalido(num)) { // if para construir o html na tela se o valor nao for numerico
        elementoChute.innerHTML += `<div>Valor Inválido</div>`
        return
    }

    if (numForMaior) {// if para construir o html na tela se for maior ou menor
        elementoChute.innerHTML += `<div>Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (num === numeroSecreto) { // if para verificar se o numero que foi dito é o num secreto
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O Número secreto era: ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="button-85" role="button">Jogar novamente</button>
        `
    }

    else if (num > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }

    else {
        elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteInvalido(num) {// funcao para determinar se o valor é do tipo number
    return Number.isNaN(num)
}

function numForMaior(num) {// funcao para determinar se o valor esta entre o "menorValor" e o "maiorValor"
    return num > maiorValor || num < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
     window.location.reload()   
    }
})