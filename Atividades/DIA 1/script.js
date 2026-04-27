function revelar() {
  
    let imagem = document.querySelector('.card-img-top');
    imagem.src = 'img/_vinicius_junior.png';

    let spanNome = document.querySelector('#Nome .placeholder'); 
    let spanRank = document.getElementById('Rank');
    let spanDataNas = document.getElementById('Data_Nas');
    let spanAltura = document.getElementById('Alutra'); 
    let spanPosicao = document.getElementById('Posição '); 

    spanNome.innerHTML = 'Vinícius José Paixão de Oliveira Júnior';
    spanRank.innerHTML = '9,5';
    spanDataNas.innerHTML = '📅 <strong>Data de Nasc:</strong> 12/07/2000 (25 anos)';
    spanAltura.innerHTML = '📏 <strong>Altura:</strong> 1,76 m';
    spanPosicao.innerHTML = '🏃 <strong>Posição:</strong> Ponta-esquerda / Atacante';

    spanNome.classList.remove('placeholder', 'col-6');

    let elementosTexto = [spanDataNas, spanAltura, spanPosicao];

    elementosTexto.forEach(function(elemento) {
        elemento.classList.remove('placeholder', 'col-4', 'col-6');
        // Aplica a estilização de texto exigida na prova
        elemento.classList.add('card-text');
    });

    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('.card-text.placeholder-glow').classList.remove('placeholder-glow');
}