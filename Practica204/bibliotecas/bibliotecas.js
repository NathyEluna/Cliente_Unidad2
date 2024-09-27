"use strict";

function nombreMayusculas(array){
   let nombresCambiados = array.map((nom) => {
        return nom.toUpperCase();
    });
    return nombresCambiados;
};

export {nombreMayusculas};