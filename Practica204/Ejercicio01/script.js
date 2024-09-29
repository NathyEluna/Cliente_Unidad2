"use strict";
//Importación de las funciones utilizadas en el ejercício 1.
import {nombreMayusculas, ordernarNombresAlReves, crearArrayObjetos, imprimirObjeto} from "../bibliotecas/bibliotecas.js";

//Array con los nombres.
let nombres = ["Varian", "Anduin", "Tyrande", "Jaina", "Malfurion"];

//Llamada a las funciones:

//Todos los nombres a mayúsculas.
console.log(`Todos los nombres a mayúsculas: [${nombreMayusculas(nombres).join(", ")}]`);

//Nombres ordenados alfabeticamente y al revés.
console.log(`Nombres ordenados alfabeticamente y al revés: [${ordernarNombresAlReves(nombres).join(", ")}]`);

//Crear un array de objetos con los nombres.
console.log(`Array de objetos:\n${imprimirObjeto(crearArrayObjetos(nombres))}`);

