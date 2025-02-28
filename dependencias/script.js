const botao = document.getElementById('submit-btn');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
let cor = 'white' // a cor não pôde ser constante porque ela muda
botao.addEventListener('click', () => {
    if (nome.value == '' || email.value == '') { // se usuário ou senha estiverem vazios...
        cor = 'rgb(241, 162, 162)' // isso é um vermelho claro
        nome.style.backgroundColor = cor;
        email.style.backgroundColor = cor;
        return false; // finaliza a execução do script
        // não lembro porque fiz isso
    } else {
        cor = 'white' // cor original
        nome.style.backgroundColor = cor;
        email.style.backgroundColor = cor;
        window.location.reload() // dá refresh na página, simulando o que um submit button faria
    }
    
});