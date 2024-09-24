"use strict"

// Función para imprimir iteraciones de un número multiplicado por 2.
function imprimirMultiplicacion(iteraciones, num) {
    let contador = num; // El valor inicial del contador será siempre el número pasado como parámetro.
    let resultado = ""; // Variable para guardar los valores y luego imprimirlos en una sola línea.

    for (let i = 0; i < iteraciones; i++) {
        resultado += `${contador} `;
        contador *= 2;
    };

    return console.log(`Multiplicando por 2 empezando por el número ${num}, ${iteraciones} veces. Resultado: ${resultado}`);
};//imprimir multplicacion

// Ejemplos de uso.
imprimirMultiplicacion(4, 6);
imprimirMultiplicacion(5, 2);