"use strict"

//No he utilizado return en las funciones porque no queremos armazenar ninguna información, solo imprimir por consola los resultados.

// Función que recibe un número e imprime su tabla de multiplicar
function multiplicar(num) {
    console.log(`Tabla del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    };

    console.log('################');
};//multiplicar

// Función principal que recibe un número y una función para generar la tabla de multiplicar.
function tablas(num, funcionMultiplicar) {
    //Validar el número pasado como parámetro para que sea mayor o igual a dos.
    if (num <= 2) {

        return "El número debe ser mayor a 2.";
    }

    // Validación de que el número sea un entero y mayor que 2. He buscado en chatGPT cuál método utilizar.
    if (!Number.isInteger(num)) {
        console.log('El valor debe ser un número entero.');
        return;
    }
    
    //Imprimir las tablas desde el número pasado por parámetro hasta el 2.
    for (let i = num; i >= 2; i--) {
        funcionMultiplicar(i);
    };
};//tablas

// Ejemplo de uso
tablas(5, multiplicar);
