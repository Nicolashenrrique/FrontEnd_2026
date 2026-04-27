function mostrarImagem() {
    
    if (document.getElementById("tabela-img")) {
        alert("A tabela já está sendo exibida!");
        return;
    }

    let imagemTabela = document.createElement("img");

    imagemTabela.id = "tabela-img";
    imagemTabela.src = "img/Tabela_Jogos.png"; 
    imagemTabela.alt = "Tabela de Jogos da Copa do Mundo 2026";

    imagemTabela.style.maxWidth = "100%";
    imagemTabela.style.marginTop = "20px";
    imagemTabela.style.borderRadius = "10px";
    imagemTabela.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";

    document.body.appendChild(imagemTabela);
}