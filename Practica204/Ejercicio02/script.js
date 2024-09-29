"use strict";

import {generarArrayAleatorio} from "../bibliotecas/bibliotecas.js";

//Llamada a la función para generar 3 arrays de 10 números aleatorios.
let array1 = generarArrayAleatorio();
let array2 = generarArrayAleatorio();
let array3 = generarArrayAleatorio();

//Concatenación de los tres arrays para luego utilizar .filter y obtener los números mayores a 5.
let arraysFiltrados = [...array1, ...array2, ...array3].filter(num => num > 5);

// Mostrar los arrays y luego el array filtrado con los números mayores a 5.
console.log(`Array de números aleatorios 1: [${array1.join(", ")}]`);
console.log(`Array de números aleatorios 2: [${array2.join(", ")}]`);
console.log(`Array de números aleatorios 3: [${array3.join(", ")}]`);
console.log(`Array filtrado con los números mayores a 5: [${arraysFiltrados.join(", ")}]`);


