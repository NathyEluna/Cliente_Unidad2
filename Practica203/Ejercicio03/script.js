"use strict"

//Función para crear discentes.
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
        }
    };
};//crear discente

//Llamada a la función crearDiscente.
let discente1 = crearDiscente(123456, "Varian", "Wrynn", 8, 6, 9);
    
function calcularMedia(discente){

};//imprimir informe

function imprimirAficiones(discente){

};//imprimir aficiones

function imprimirInforme(discente){

}//imprimir informe



/* let total = 0;
    for(let i = 0; i < puntos.length; i++){
        total += puntos[i];
    };//for

    total / puntos.length */
