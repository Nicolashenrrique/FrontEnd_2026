const inputConvidado = document.getElementById('nomeConvidado');
const listaConvidados = document.getElementById('listaConvidados');

function adicionarConvidado() {
    const nome = inputConvidado.value.trim();

    if (nome === '') {
        alert('Por favor, digite o nome do convidado.');
        return;
    }

    const novoItem = document.createElement('li');

    novoItem.innerHTML = `
        <span class="nome-texto">${nome}</span>
        <div class="acoes">
            <button class="btn-concluir" onclick="concluir(this)">Concluir</button>
            <button class="btn-editar" onclick="editar(this)">Editar</button>
            <button class="btn-excluir" onclick="excluir(this)">Excluir</button>
        </div>
    `;

    listaConvidados.appendChild(novoItem);

    inputConvidado.value = '';
    inputConvidado.focus();
}

function concluir(botao) {
    const itemLista = botao.closest('li');
    itemLista.classList.toggle('classe-riscado');
}

function editar(botao) {
    const itemLista = botao.closest('li');
    const spanNome = itemLista.querySelector('.nome-texto');
    const nomeAtual = spanNome.innerText;
    const novoNome = prompt('Edite o nome do convidado:', nomeAtual);

    if (novoNome !== null && novoNome.trim() !== '') {
        spanNome.innerText = novoNome.trim();
    }
}

function excluir(botao) {
    const itemLista = botao.closest('li');
    itemLista.remove();
}