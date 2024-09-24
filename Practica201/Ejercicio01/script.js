"use strict"

// Variables con las masas y alturas de Marcos y Juan.
let masaMarcos = 72;
let alturaMarcos = 1.80;
let masaJuan = 89;
let alturaJuan = 1.93;

//Función para calcular el IMC.
function calcularIMC(masa, altura){
    return masa / (altura * altura);
};

// Aquí calculamos el IMC de Marcos y Juan, para luego compararlos.
let imcMarcos = calcularIMC(masaMarcos, alturaMarcos);
let imcJuan = calcularIMC(masaJuan, alturaJuan);

// Función para comparar el IMC de dos personas.
function compararIMC(imc1, imc2){
    return imc1 > imc2
};

// Llamada a la función para comparar el IMC.
let marcosTieneMayorIMC = compararIMC(imcMarcos, imcJuan);

// Mostrar los resultados en la consola. También he buscado en Google cómo redondear los resultados a 2 decimales.
console.log(`IMC de Marcos: ${imcMarcos.toFixed(2)}`);
console.log(`IMC de Juan: ${imcJuan.toFixed(2)}`);

console.log(`¿Tiene Marcos un IMC mayor que el de Juan? ${marcosTieneMayorIMC ? "Sí." : "No."}`);