"use strict";

//Función para imprimir objetos de distintos tipos.
function imprimirObjeto(objeto) {
    //Según la documentación de JavaScript, Object.entries devuelve un array con pares de [clave, valor] de las propiedades de un objeto, si es que se le pasa un objeto.
    //En .map(([clave, valor]), se utiliza así porque Object.entries() devuelve un array de arrays. Cada sub-array representa un par de [clave, valor] del objeto original.
    return Object.entries(objeto).map(([clave, valor]) => {
        //Para saber qué tipo de objeto se pasa como argumento a la función.
        let tipo = typeof valor;
        //Si es array, simplesmente mostramos todo el array.
        if (Array.isArray(valor)) {
            return `Clave: ${clave} -- Tipo: array -- Valor: [${valor.join(", ")}]`;
        } 
        //Si el valor es un objeto, al mostrarlo, se llama a la función nuevamente en caso de que alguna de sus propiedades también sea un objeto.
        else if (tipo === 'object') {
            return `Clave: ${clave} -- Tipo: object -- Valor: {\n${imprimirObjeto(valor)}\n}`;
        //Si es de tipo método.
        } else if (tipo === 'function') {
            return `Clave: ${clave} -- Tipo: método`;
        //Si es número, palabra, lletra...
        } else {
            return `Clave: ${clave} -- Tipo: ${tipo} -- Valor: ${valor}`;
        }
    }).join("\n");
};//imprimir objeto


// Ejemplo de uso con una función de crear objeto hecha en el ejercicio 03, pero con solo 1 método.
function crearDiscente(id, nom, cognom, nota1, nota2, nota3){
    return {
        idDiscente : id,
        nombreDiscente : nom,
        apellidosDiscente : cognom,
        aficiones : ["Leer", "Videojuegos", "Senderismo", "Cine"],
        notasDiscente : {
            primera : nota1,
            segunda : nota2,
            tercera : nota3,
        },
        imprimirAficiones: function(){
            return `Aficiones del alumno:  [${this.aficiones.join(", ")}].`
        },
    };
};//crear discente

//Objeto de ejemplo.
let discente1 = crearDiscente(123456, "Varian", "Wrynn", 8, 6, 9);

// Llamada a la función

console.log(imprimirObjeto(discente1));  // Imprimir en la consola solo en este punto
