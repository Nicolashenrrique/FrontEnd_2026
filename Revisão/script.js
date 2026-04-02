const produtos = {
    "123": {"nome": "Nicolas", "preco": 9.0000},
    "456": {"nome": "fala fala", "preco": 3.0000},
    "789": {"nome": "Sabrina", "preco": 12.0000},
    "147": {"nome": "Gaucho", "preco": 90.5000 },
};

let carrinho =[];

const audio = new Audio ("faustao.mp3");

window.onload = () => {
        document.getElementById("cod").focus();
}

function addProduto(){
    const codHtml = document.getElementById ("cod");
    const qtdHTML = document.getElementById ("qtd");

    const valorCod = codHtml.value; 
    const valorQtd = qtdHTML.value; 

    if(!produtos[valorCod]){
        alert ();
        return;
    }

    const infoProduto = produtos[valorCod];

    const item = {
            nome: infoProduto.nome,
            preco:infoProduto.preco,
            quantidade: valorQtd,
            subtot: infoProduto.preco * valorQtd
    };

    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();

    atualizarTela();

    qtdHTML.value = 1;
    codHtml.value = "";

}