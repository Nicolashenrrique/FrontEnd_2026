function add() {
    document.querySelector('.card-img-top').src = 'img/_vinicius_junior.png';
    
    let nomeSpan = document.querySelector('#Nome span.placeholder');
    nomeSpan.innerHTML = 'Vinícius José Paixão de Oliveira Júnior';
    nomeSpan.classList.remove('placeholder', 'col-6');
    nomeSpan.classList.add('card-text');
    
    document.getElementById('Rank').innerHTML = '9,5';

    let dataSpan = document.getElementById('Data_Nas');
    dataSpan.innerHTML = '<strong>Nascimento:</strong> 12/07/2000 (25 anos)';
    dataSpan.classList.remove('placeholder', 'col-4');
    dataSpan.classList.add('card-text');

    let alturaSpan = document.getElementById('Alutra');
    alturaSpan.innerHTML = '<strong>Altura:</strong> 1,76 m';
    alturaSpan.classList.remove('placeholder', 'col-4');
    alturaSpan.classList.add('card-text');

    let posSpan = document.getElementById('Posição ');
    posSpan.innerHTML = '<strong>Posição:</strong> Ponta-esquerda / Atacante';
    posSpan.classList.remove('placeholder', 'col-6');
    posSpan.classList.add('card-text');

    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('.card-text.placeholder-glow').classList.remove('placeholder-glow');
}