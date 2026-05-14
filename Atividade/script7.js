function analisarCartao() {
    let numero = document.getElementById('numeroCartao').value.replace(/[\s.]/g, '');

    if (numero.length < 13 || numero.length > 16 || isNaN(numero)) {
        alert("Número inválido. Insira de 13 a 16 dígitos.");
        return;
    }

    let soma = 0;
    let reverso = numero.split('').reverse().map(Number);

    for (let i = 0; i < reverso.length; i++) {
        if (i % 2 !== 0) {
            reverso[i] *= 2;
            if (reverso[i] > 9) {
                reverso[i] -= 9;
            }
        }
        soma += reverso[i];
    }

    const ehValido = soma % 10 === 0;
    const primeiroDigito = numero.charAt(0);
    const doisPrimeiros = parseInt(numero.substring(0, 2));

    let bandeira = "Outra/Desconhecida";
    if (primeiroDigito === '4') bandeira = "Visa";
    else if (doisPrimeiros >= 51 && doisPrimeiros <= 55) bandeira = "Mastercard";
    else if (doisPrimeiros === 34 || doisPrimeiros === 37) bandeira = "American Express";
    else if (primeiroDigito === '6') bandeira = "Discover";

    let setor = "Desconhecido";
    switch(primeiroDigito) {
        case '1': case '2': setor = "Companhias Aéreas"; break;
        case '3': setor = "Viagens e Entretenimento"; break;
        case '4': case '5': setor = "Instituições Financeiras/Bancos"; break;
        case '6': setor = "Merchandising e Bancos"; break;
        case '7': setor = "Petróleo"; break;
        case '8': setor = "Telecomunicações e Saúde"; break;
        case '9': setor = "Atribuição Nacional"; break;
    }

    let banco = "Diversos/Parceiros";
    if (doisPrimeiros >= 51 && doisPrimeiros <= 55) banco = "Banco Múltiplo Mastercard";
    else if (primeiroDigito === '4') banco = "Banco Parceiro Visa";

    document.getElementById('statusCartao').innerText = ehValido ? "Válido" : "Inválido";
    document.getElementById('statusCartao').style.color = ehValido ? "green" : "red";
    document.getElementById('bandeiraCartao').innerText = bandeira;
    document.getElementById('setorCartao').innerText = setor;
    document.getElementById('bancoCartao').innerText = banco;
    
    document.getElementById('painelInfo').style.display = 'block';
}