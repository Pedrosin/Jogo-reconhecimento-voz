const elementoChute = document.getElementById('chute') //pega o id do chute
// scrypt para executar API de reconhecimento de voz assim que a janela ser executada
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; 

//funcoes para o funcionamento da API
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//add o evento de "ouvir" da API
recognition.addEventListener('result', onSpeak)
//add o evento para quando ele "acabar" de "ouvir" recomece a "ouvir"
recognition.addEventListener('end', () => recognition.start()) //

function onSpeak(e) { 
    chute = e.results[0][0].transcript // busca o resultado da API 
    exibeChuteNaTela(chute) //chamada da funcao para exibir o valor que o usuario disse 
    verificaChute(chute) //chamada da funcao de validacao, se encontra em "validacao.js"
}

function exibeChuteNaTela(chute){ // funcao para construir o html na tela 
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `     
}
