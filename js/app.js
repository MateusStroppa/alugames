//Declarando a variável para contar a quantidade de jogos alugados
let jogosAlugados = 0;

// Função que imprime no console, quantos jogos foram alugados
function contarJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


//Função que altera as classes da imagem e botão, caso ele seja alugado ou não
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    //Valida se o jogo está alugado ou não, antes de alterar o status 
    if(imagem.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')){
        //Caso o jogo esteja alugado, confirma se o usuário quer devolvê-lo
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            jogosAlugados --;
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        jogosAlugados++;
    }

    contarJogosAlugados();

}