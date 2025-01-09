
//Criar uma função que altere o botão e a claridade do jogo, dependendo do status dele
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    console.log(nomeJogo.textContent);

//Parte que valida a imagem do jogo 
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    }else{
        imagem.classList.add('dashboard__item__img--rented');
    }

//Parte que valida o botão do jogo
    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    }else{
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }

}