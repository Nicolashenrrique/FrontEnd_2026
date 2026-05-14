const inputC = document.getElementById('celsius');
const inputF = document.getElementById('fahrenheit');

function converterFahrenheit() {
    if (inputC.value === "") { 
        inputF.value = ""; 
        return; 
    }
    let c = parseFloat(inputC.value);
    let f = (c * 9/5) + 32;
    inputF.value = f.toFixed(2);
}

function converterCelsius() {
    if (inputF.value === "") { 
        inputC.value = ""; 
        return; 
    }
    let f = parseFloat(inputF.value);
    let c = (f - 32) * 5/9;
    inputC.value = c.toFixed(2);
}