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

//Llamada a la función crearDiscente.
let discente1 = crearDiscente(123456, "Varian", "Wrynn", 8, 6, 9);

//Mostrar toda la información del discente.
console.log(discente1.imprimirInforme());

