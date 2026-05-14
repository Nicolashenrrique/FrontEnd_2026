function calcularMedia() {
    const nome = document.getElementById('nomeAluno').value;
    const n1 = parseFloat(document.getElementById('nota1').value) || 0;
    const n2 = parseFloat(document.getElementById('nota2').value) || 0;
    const n3 = parseFloat(document.getElementById('nota3').value) || 0;
    const resultadoDiv = document.getElementById('resultado');

    if(!nome) {
        alert("Por favor, insira o nome do aluno.");
        return;
    }

    let media = (n1 + n2 + n3) / 3;
    let mensagem = `Aluno: ${nome} | Média: ${media.toFixed(2)}<br>`;

    if (media >= 7.0) {
        resultadoDiv.style.backgroundColor = "#d4edda";
        resultadoDiv.style.color = "blue";
        resultadoDiv.innerHTML = mensagem + "Situação: Aprovado!";
    } else if (media >= 4.0) {
        let falta = (10 - media).toFixed(2);
        resultadoDiv.style.backgroundColor = "#fff3cd";
        resultadoDiv.style.color = "green";
        resultadoDiv.innerHTML = mensagem + `Situação: Exame!<br>Faltam ${falta} pontos para atingir a nota máxima.`;
    } else {
        resultadoDiv.style.backgroundColor = "#f8d7da";
        resultadoDiv.style.color = "red";
        resultadoDiv.innerHTML = mensagem + "Situação: Reprovado!";
    }
}