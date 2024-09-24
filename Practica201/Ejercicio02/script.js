"use strict"

// Variables con los puntos de cada equipe.
let puntosEquipoJuan = [89, 120, 103];
let puntosEquipoMiguel = [116, 94, 123];
let puntosEuipoMaria = [97, 134, 105];

// Función para calcular la puntuación media de un equipo.
function calcularMedia(puntos){
    let total = 0;
    for(let i = 0; i < puntos.length; i++){
        total += puntos[i];
    };//for

    return total / puntos.length
};//calcular media

// Variables para guardar la media de cada equipo.
let mediaJuan = calcularMedia(puntosEquipoJuan);
let mediaMiguel = calcularMedia(puntosEquipoMiguel);
let mediaMaria = calcularMedia(puntosEuipoMaria);

// Función para mostrar el ganador; si hay empate, también se muestra un mensaje.
// He decidido utilizar 6 parámetros, 2 para cada equipo, y no objetos porque considero que no eran parte de esta práctica.
function mostrarGanador(eq1, med1, eq2, med2, eq3, med3){
    console.log(`${eq1} - Media de puntuación: ${med1}.`);
    console.log(`${eq2} - Media de puntuación: ${med2}.`);
    console.log(`${eq3} - Media de puntuación: ${med3}.`);

    if(med1 > med2 && med1 > med3){
        console.log(`El ganador es ${eq1} con una media de puntuación de ${med1}.`);
    }else if(med2 > med1 && med2 > med3){
        console.log(`El ganador es ${eq2} con una media de puntuación de ${med2}.`);
    }else if(med3 > med1 && med3 > med2){
        console.log(`El ganador es ${eq3} con una media de puntuación de ${med3}.`);
    }else{
        console.log("Hay un empate entre equipos.")
    };
};//mostrar ganador

// Llamada a la función para mostrar el ganador.
mostrarGanador("Equipo de Juan", mediaJuan, "Equipo de Miguel", mediaMiguel, "Equipo de María", mediaMaria);