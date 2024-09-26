"use strict";

//Función para crear curso igual a la del ejercício 01.
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

    string += `Mostrando los datos del curso ${curso.nombreCurso}: \n`;
    for(var propiedad in curso){
        string += `${propiedad}: ${curso[propiedad]}\n`;
    };

    return string;
};//mostrar curso

//Llamada a la función mostrar curso.
console.log(mostrarCurso(curso1));
