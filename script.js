let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = Number.isInteger(result) ? result : result.toFixed(8).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = 'Error';
    }
}

function scientific(func) {
    try {
        let val = eval(display.value) || 0;
        switch(func) {
            case 'sin': display.value = Math.sin(val); break;
            case 'cos': display.value = Math.cos(val); break;
            case 'tan': display.value = Math.tan(val); break;
            case 'log': display.value = Math.log10(val); break;
            case 'sqrt': display.value = Math.sqrt(val); break;
            case 'pi': display.value += Math.PI; break;
        }
    } catch (e) {
        display.value = 'Error';
    }
}