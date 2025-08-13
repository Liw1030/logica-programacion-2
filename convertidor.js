// Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
// Debe imprimir ambos resultados por consola o por el DOM.
// Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.

// const prompt = require('prompt-sync')();

// let tempCelcius = parseFloat(prompt('Ingrese la temperatura en °C: '));

// if (isNaN(tempCelcius)) {
//     console.error(' Error: El valor ingresado debe ser un número. ⚠️');
// } else {
//     // Fórmula para °F
//     let gradosF = (tempCelcius * 9/5) + 32;
//     console.log('La temperatura en °F es:', gradosF.toFixed(1));

//     // Fórmula para °K
//     let gradosK = tempCelcius + 273.15;
//     console.log('La temperatura en °K es:', gradosK.toFixed(2));
// }

function convertirTemperatura(celsius) {
    return {
        fahrenheit: (celsius * 9 / 5) + 32,
        kelvin: celsius + 273.15
    };
}

function mostrarEnPantalla(c, f, k) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
    <h5><strong>Resultado:</strong></h5>
    <p> <strong>Centígrados:</strong> ${c.toFixed(1)} °C</p>
    <p> <strong>Fahrenheit:</strong> ${f.toFixed(1)} °F</p>
    <p> <strong>Kelvin:</strong> ${k.toFixed(2)} °K</p>
    `;
}

document.getElementById('conversor').addEventListener('click', () => {
    const input = document.getElementById('tempInput');
    const tempCelcius = parseFloat(input.value);

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(tempCelcius)) {
        resultadoDiv.innerHTML = `<p style="color: red;">⚠️ Por favor ingresa un número válido.</p>`;
    } else {
        const { fahrenheit, kelvin } = convertirTemperatura(tempCelcius);
        mostrarEnPantalla(tempCelcius, fahrenheit, kelvin);
    }
});