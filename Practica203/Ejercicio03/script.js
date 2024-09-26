"use strict";

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
        },
        //Métodos del objeto discente.
        calcularMedia: function(){
            return this.notasDiscente.primera + this.notasDiscente.segunda + this.notasDiscente.tercera / 3;
        },
        imprimirAficiones: function(){
            return `Aficiones del alumno:  [${this.aficiones.join(", ")}].`
        },
        imprimirInforme: function(){
            console.log(`Informe del alumno ${this.idDiscente}:`);
            console.log(`- Nombre completo del alumno: ${this.nombreDiscente} ${this.apellidosDiscente}.`);
            console.log(`- ${this.imprimirAficiones()}`);
            console.log(`- Notas del alumno:`);
            console.log(`-- Primera evaluación: ${this.notasDiscente.primera}.`);
            console.log(`-- Segunda evaluación: ${this.notasDiscente.segunda}.`);
            console.log(`-- Tercera evaluación: ${this.notasDiscente.tercera}.`);
            console.log(`- Media de las tres evaluaciones: ${this.calcularMedia()}`);
        },
    };
};//crear discente

//Llamada a la función crearDiscente.
let discente1 = crearDiscente(123456, "Varian", "Wrynn", 8, 6, 9);

//Mostrar toda la información del discente.
console.log(discente1.imprimirInforme());

