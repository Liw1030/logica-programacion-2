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

const convertir = document.getElementById('conversor');

convertir.addEventListener('click', function () {
    const input = document.getElementById('tempInput');
    const tempCelcius = parseFloat(input.value);

    if (isNaN(tempCelcius)) {
        console.error('❌ Error: El valor ingresado debe ser un número.');
        alert('⚠️ Por favor ingresa un número válido en °C.');
    } else {
        const gradosF = (tempCelcius * 9 / 5) + 32;
        const gradosK = tempCelcius + 273.15;

        console.log(`🌡️ °F: ${gradosF.toFixed(1)} | °K: ${gradosK.toFixed(2)}`);
        alert(`✅ Conversión completa:\n°F: ${gradosF.toFixed(1)}\n°K: ${gradosK.toFixed(2)}`);
    }
});