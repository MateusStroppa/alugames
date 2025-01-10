
//Criar uma função que altere o botão e a claridade do jogo, dependendo do status dele
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    console.log(nomeJogo.textContent);



    //Valida se o jogo está alugado ou não, antes de alterar o status 
    if(imagem.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')){
        //Caso o jogo esteja alugado, confirma se o usuário quer devolvê-lo
        validacao = prompt(`Devolver o jogo ${nomeJogo.textContent}?`)
        if(validacao == 'sim' || validacao == 'Sim' || validacao == 'SIM'){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }
}

//Função para confirmar se o usuário quer devolver o jogo
function validarDevolucao(){


    
}