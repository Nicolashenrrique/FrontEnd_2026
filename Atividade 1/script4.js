function calcularTaxas() {
    const bandeira = document.getElementById('bandeira').value;
    const valor = parseFloat(document.getElementById('valorVenda').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);

    if (isNaN(valor) || isNaN(parcelas) || valor <= 0 || parcelas <= 0) {
        alert("Preencha o valor e as parcelas corretamente.");
        return;
    }

    let percentualBandeira = 0;

    switch (bandeira) {
        case 'visa':
            percentualBandeira = 0.02;
            break;
        case 'master':
            percentualBandeira = 0.0185;
            break;
        case 'elo':
            percentualBandeira = 0.03;
            break;
    }

    const taxaBandeira = valor * percentualBandeira;
    const juros = valor * (0.0035 * parcelas); 
    const taxaMensalFixa = 12.50 * parcelas; 
    
    const valorTotal = valor + taxaBandeira + juros + taxaMensalFixa;
    const valorParcela = valorTotal / parcelas;

    document.getElementById('outBandeira').innerText = taxaBandeira.toFixed(2);
    document.getElementById('outJuros').innerText = juros.toFixed(2);
    document.getElementById('outFixa').innerText = taxaMensalFixa.toFixed(2);
    document.getElementById('outTotal').innerText = valorTotal.toFixed(2);
    document.getElementById('outParcela').innerText = valorParcela.toFixed(2);
    
    document.getElementById('resumoFinal').style.display = 'block';
}