"use strict";

//Función para crear un curso.
function crearCurso(nom, anio){
    return{
        nombreCurso : nom,
        anioCurso : anio,
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        alumnado : [],
    }
};

//Llamada a la función, creando dos cursos.
let curso1 = crearCurso("Entorno Cliente", 2024);
let curso2 = crearCurso("Entorno Servidor", 2024);

//Mostrar diferentes atributos de cada curso.
console.log(`Nombre del curso: ${curso1.nombreCurso}. \nDescripción del curso: ${curso1.descripcion}.`);
console.log(`Nombre del curso: ${curso2.nombreCurso}. \nAño de início de curso: ${curso2.anioCurso}`);