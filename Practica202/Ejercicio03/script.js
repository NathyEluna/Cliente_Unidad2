"use strict"

// Función para generar un array de números aleatorios entre 1 y 100. He buscado como hacer para que el array tenga el tamaño de la cantidad pasado por parámetro.
//.map() no tiene parámetros porque recíbe un array vacío, entonces no nos importa los valores originales del array(en ese caso undefined).
function generarArrayAleatorio(cantidad) {
    return [...Array(cantidad)].map(() => Math.floor(Math.random() * 101));
};//generar array aleatorio

// Función para sumar las posiciones contrarias de dos arrays
function sumarPosicionesContrarias(array1, array2) {
    return array1.map((num, i) => num + array2[array2.length - 1 - i]);
};//sumar posiciones contrarias

// Función para imprimir el array de forma formateada
//.join(", ") devuelve el array en formato String, con el separador ", " entre cada elemento.
function imprimirArray(array) {
    console.log(`[${array.join(", ")}]`);
};//imprimir array

// Función calcular y imprimir el resultado.
function calcular(generar, sumar, imprimir) {
    //Generar los arrays.
    const array1 = generar(10);
    const array2 = generar(10);

    //Imprimir por consola los arrays generados.
    console.log("Array aleatorio 1: ");
    imprimir(array1);
    console.log("Array aleatorio 2: ");
    imprimir(array2);

    //Imprimir el resultado de la suma.
    console.log("Suma de las cifras que ocupen posiciones contrarias en los arrays: ");
    imprimir(sumar(array1, array2));
};//calcular

// Ejecución del programa
calcular(generarArrayAleatorio, sumarPosicionesContrarias, imprimirArray);
