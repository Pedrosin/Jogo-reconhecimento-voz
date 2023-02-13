const menorValor = 1
const maiorValor = 1000
const numeroSecreto = geranum() //const com a funcao de gerar num parc. aleatorio

function geranum(){ // funcao para gerar numeros parcialmente aleatorios
//usa "parseInt" para retornar o num com uma casa decimal, math.random para gerar o num e multiplica por "maiorValor" pois
//o numero gerado é decimal, e soma + 1 para que o "maiorValor" seja considerado 
    return parseInt(Math.random() * maiorValor + 1)  
}

console.log('Numero: ', numeroSecreto)

// construcao do html 
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor