"use strict";

//Función para crear discentes del ejercício 3.
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
        //Métodos del objeto discente.
        calcularMedia: function(){
            return ((this.notasDiscente.primera + this.notasDiscente.segunda + this.notasDiscente.tercera) / 3).toFixed(2);
        },
        imprimirAficiones: function(){
            return `Aficiones del alumno:  [${this.aficiones.join(", ")}].`
        },
        imprimirInforme: function(){
            let informe = `Informe del alumno ${this.idDiscente}:\n`;
            informe += `- Nombre completo del alumno: ${this.nombreDiscente} ${this.apellidosDiscente}.\n`;
            informe += `- ${this.imprimirAficiones()}\n`;
            informe += `- Notas del alumno:\n`;
            informe += `-- Primera evaluación: ${this.notasDiscente.primera}.\n`;
            informe += `-- Segunda evaluación: ${this.notasDiscente.segunda}.\n`;
            informe += `-- Tercera evaluación: ${this.notasDiscente.tercera}.\n`;
            informe += `- Media de las tres evaluaciones: ${this.calcularMedia()}\n`;

            return informe;
        },
    };
};//crear discente

function crearCurso(nom, anio){
    return{
        nombreCurso : nom,
        anioCurso : anio,
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        alumnado : [],
        matricular: function(discente){
            //Corregir quitando el return y poniendo el discente dentro del array sin spread operator.
            return this.alumnado = [...this.alumnado, discente];
        },
    };
};//crear curso

//Función mostrar curso del ejercício 02.
function mostrarCurso(curso){
    let string = "";

        string += `Mostrando los datos del curso ${curso.nombreCurso}: \n`;
        for(var propiedad in curso){
            //He cambiado esa parte del código para no imprimir los métodos de curso a la hora de mostrarlo por pantalla.
            if (typeof curso[propiedad] !== 'function') {
                string += `${propiedad}: ${curso[propiedad]}\n`;
            };
        };
    return string;
};//mostrar curso

//Llamada a las funciones crearCurso y crearDiscente para crear uno de cada tipo.
let curso1 = crearCurso("Entorno Cliente", 2024);
let discente1 = crearDiscente(123456, "Varian", "Wrynn", 8, 6, 9);

//Llamada al método matricular de crearCurso, para matricular un alumno.
curso1.matricular(discente1);

//Llamada a la función mostrar curso, después de matricular a un alumno.
console.log(mostrarCurso(curso1));

