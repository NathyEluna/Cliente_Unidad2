"use strict";

//Misma función del ejercício 01.
function crearCurso(nom, anio){
    return{
        nombreCurso : nom,
        anioCurso : anio,
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        alumnado : [],
    };
};//crear curso

//Llamada a la función crearCurso.
let curso1 = crearCurso("Entorno Cliente", 2024);
let curso2 = crearCurso("Programación", 2023);

function mostrarCurso(curso){
    let string = "";

        console.log(`Mostrando los datos del curso ${curso.nombreCurso}: `);
        for(var propiedad in curso){
           string += `${propiedad}: ${curso[propiedad]}\n`;
        }
    return console.log(string);
};//mostrar curso

//Llamada a la función mostrar curso.
console.log(mostrarCurso(curso1));