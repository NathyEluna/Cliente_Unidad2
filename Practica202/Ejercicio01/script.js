"use strict"

//Función para sumar números pasados por parámetro.
function sumarNumeros(){
    //Controlar el número de parámetros.
    if(arguments.length < 2){

        return "Error: No es posible realizar la suma con un solo número. Debes ingresar al menos dos números.";
    }else{
        var suma = 0;
        for (let i = 0; i < arguments.length; i++) {
            //Controlar si los parámetros son números.
            if(isNaN(arguments[i])){

                return "Error: Debes insertar solo números.";
            }//if
            suma += arguments[i];
        }//for

        return `La suma de los números es ${suma}`;
    }//else
};//sumar numeros

//Salida por consola correcta.
console.log(sumarNumeros(2, 2));
console.log(sumarNumeros(2, 2, 4));
//Salida por consola de los errores.
console.log(sumarNumeros(1));
console.log(sumarNumeros("patata", 2));

