"use strict";

//Funciones del ejercício 1.

// Función para imprimir el objeto.
export function imprimirObjeto(objeto) {
    return objeto.map(item => `ID: ${item.id}, Nombre: ${item.nombre}`).join("\n");
};//imprimirObjeto

//Función para pasar todos los nombres del array a mayúsculas.
export function nombreMayusculas(array){
   //He intentado escribir la función flecha como en yo hacía en Java y al final ha funcionado. Antes tenía un código muy largo y con un return adicional dentro del map.
   return array.map(nom => nom.toUpperCase());
};//nombreMayusculas

//Función para ordenar los nombres alfabeticamente y al revés.
export function ordernarNombresAlReves(array){
    let nombresOrdenadosAlReves = array.sort().reverse();

    return nombresOrdenadosAlReves;
};//ordenarNombresAlReves

//Función para crear un array de objetos utilizando el array de nombres.
/*
*He buscado cómo hacer para no tener el return dentro del map, como en la función de nombres a mayúsculas, y al final he visto que si solo devuelves una expresión en la función flecha, 
*se pueden quitar las llaves y utilizar directamente los paréntesis. La llave que está ahí es para la creación del objeto.
*/
export function crearArrayObjetos(array) {
    let arrayObjetos = array.map((nom, indice) => ({
        id: indice + 1,
        nombre: nom
    }));
    return arrayObjetos;
 };//crearArrayObjetos
 
 //Funciones del ejercício 2.

//He reutilizado la función de un ejercicio anterior, pero ahora siempre genera un array con 10 números aleatorios del 1 al 10.
export function generarArrayAleatorio() { 
    return [...Array(10)].map(() => Math.floor(Math.random() * 10) + 1);
};//generarArrayAleatorio

//Funciones del ejercício 3.

export function imprimirUsuario(objeto) {
    return Object.entries(objeto).map(([clave, valor]) => {
        let tipo = typeof valor;

        if (Array.isArray(valor)) {//ARRAY
            return `Clave: ${clave} -- Valor: [${valor.join(", ")}]`;
        } 
        else if (tipo === 'object' && valor !== null) {
            return `Clave: ${clave} -- Valor: {\n${imprimirUsuario(valor)}\n}`;
        } else {
            return `Clave: ${clave} -- Tipo: ${tipo} -- Valor: ${valor}`;
        }
    }).join("\n");
};//imprimirUsuario

//Función para insertar un nuevo usuario. Pasamos un array como parámetro porque así el código es reutilizable y no modifica a solo un array.
export function agregarUsuario(usuarios, nuevoUsuario) {
    // Crear un nuevo array con el nuevo usuario añadido
    const usuariosActualizados = [...usuarios, nuevoUsuario];
    return {
        mensaje: "Usuario agregado:",
        usuario: nuevoUsuario,
        usuariosActualizados: usuariosActualizados,
    };
};//agregarUsuario

//Función para devolver usuarios mayores de edad
export function obtenerUsuariosMayoresEdad(usuarios) {
    const mayores = usuarios.filter(usuario => usuario.preferencias.edad >= 18);
    return {
        mensaje: "Usuarios mayores de edad:",
        usuarios: mayores,
    };
};//obtenerusuariosmaryoresedad

//Función para devolver usuarios con correo de Yahoo
export function obtenerUsuariosCorreoYahoo(usuarios) {
    const usuariosYahoo = usuarios.filter(usuario => 
        usuario.contacto.correoelectronico.includes('@yahoo.com')
    );
    return {
        mensaje: "Usuarios con correo de Yahoo:",
        usuarios: usuariosYahoo,
    };
};//obtenerusuarioscorreoyahoo

//Función para usuarios que prefieren tema claro, son mayores de edad y están en España
export function obtenerUsuariosClaroMayoresEspana(usuarios) {
    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.preferencias.tema === 'claro' &&
        usuario.preferencias.edad >= 18 &&
        usuario.contacto.direccion.pais === 'España'
    );
    return {
        mensaje: "Usuarios que prefieren tema claro, son mayores y están en España:",
        usuarios: usuariosFiltrados,
    };
};//obtenerusuariosclaromayoresespana

//Función para usuarios con datos faltantes
export function obtenerUsuariosDatosFaltantes(usuarios) {
    const usuariosIncompletos = usuarios.filter(usuario => {
        return !usuario.nombre || !usuario.preferencias || !usuario.contacto;
    });
    return {
        mensaje: "Usuarios con datos faltantes:",
        usuarios: usuariosIncompletos,
    };
};//obtenerusuariosdatosfaltantes

//Función para agregar apellidos
export function agregarApellidos(usuarios) {
    const usuariosConApellidos = usuarios.map(usuario => ({
        ...usuario,
        apellidos: "No indicado"
    }));
    return {
        mensaje: "Usuarios con apellidos añadidos:",
        usuarios: usuariosConApellidos,
    };
};//agregarapellidos

//Función para añadir código a la dirección
export function agregarCodigo(usuarios) {
    const usuariosConCodigo = usuarios.map(usuario => ({
        ...usuario,
        contacto: {
            ...usuario.contacto,
            direccion: {
                ...usuario.contacto.direccion,
                codigo: "00000"
            }
        }
    }));
    return {
        mensaje: "Usuarios con código añadido a la dirección:",
        usuarios: usuariosConCodigo,
    };
};//agregar codigo