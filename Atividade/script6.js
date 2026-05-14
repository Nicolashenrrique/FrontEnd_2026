function calcularOrcamento() {
    const valorPacote = parseFloat(document.getElementById('pacote').value);
    const pessoas = parseInt(document.getElementById('pessoas').value);

    if (isNaN(pessoas) || pessoas <= 0) {
        alert("Insira uma quantidade válida de pessoas.");
        return;
    }

    const custoBruto = valorPacote * pessoas;
    const taxaServico = custoBruto * 0.10;
    let subtotal = custoBruto + taxaServico;
    let desconto = 0;

    if (pessoas > 100) {
        desconto = subtotal * 0.05;
    }

    const totalFinal = subtotal - desconto;

    document.getElementById('custoBruto').innerText = custoBruto.toFixed(2);
    document.getElementById('taxaServico').innerText = taxaServico.toFixed(2);
    document.getElementById('desconto').innerText = desconto.toFixed(2);
    document.getElementById('totalFinal').innerText = totalFinal.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
}