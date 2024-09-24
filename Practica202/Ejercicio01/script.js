"use strict"

//Función por
function sumarNumeros(){
    //Controlar el número de parámetros.
    if(arguments.length < 2){

        return `Error: Imposible hacer la suma de un número. Deberás poner como mímino dos números.`;
    }else{
        var suma = 0;
        for (var i = 0; i < arguments.length; i++) {
            //Controlar si los parámetros son números.
            if(isNaN(arguments[i])){
                return `Error: Debes inserir apenas números.`;
            }
            suma += arguments[i];
        }//for

        return `La suma de los números es ${suma}`;
    }//else
};//sumar numeros

//Salida por consola correcta.
console.log(sumarNumeros(2, 2));
console.log(sumarNumeros(2, 2, 4));
//Salida por consola de errores.
console.log(sumarNumeros(1));
console.log(sumarNumeros("patata", 2));

