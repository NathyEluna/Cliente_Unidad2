"use strict";

import {imprimirUsuario, agregarUsuario, obtenerUsuariosMayoresEdad, obtenerUsuariosCorreoYahoo, obtenerUsuariosClaroMayoresEspana, obtenerUsuariosDatosFaltantes, agregarApellidos, agregarCodigo} from "../bibliotecas/bibliotecas.js";

//Copia del fichero pasado en aules.
const usuarios = [
    {
      nombre: "Luis",
      preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
      contacto: {
        direccion: {
          calle: "Calle falsa, 666",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@yahoo.com",
        telefono: "123456789",
      },
    },
    {
      nombre: "Marta",
      preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
      contacto: {
        direccion: {
          calle: "Calle también falsa, 123",
          localidad: "Andorra la Vella",
          pais: "Andorra",
        },
        correoelectronico: "correoandorrano@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Alberto",
      preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
      contacto: {
        direccion: {
          calle: "Elm Street, 666",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correonulo@yahoo.com",
        telefono: "548632478",
      },
    },
    {
      nombre: "Jacinto",
      preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
      contacto: {
        direccion: {
          calle: "Elm Street, 667",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Rigoberta",
      preferencias: { tema: "claro", idioma: "francés", edad: 34 },
      contacto: {
        direccion: {
          calle: "Calle inexistente, 6",
          localidad: "Elda",
          pais: "Española",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "232547859",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle de mentira, s/n",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "estecorreonoexiste@gmail.com",
        telefono: "452158697",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle existente, 34",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correoinexistente@yahoo.com",
        telefono: "",
      },
    },
];

//Nuevo usuário a añadir.
const nuevoUsuario = {
  nombre: "Harry",
  preferencias: { tema: "claro", idioma: "español", edad: 22 },
  contacto: {
      direccion: {
          calle: "Privet Drive, 4",
          localidad: "Little Whinging",
          pais: "Inglaterra",
      },
      correoelectronico: "harry@gmail.com",
      telefono: "987654321",
  },
};

// Guardar los resultados y mostrarlos
let resultadoAgregar = agregarUsuario(usuarios, nuevoUsuario);
let resultadoMayores = obtenerUsuariosMayoresEdad(resultadoAgregar.usuariosActualizados);
let resultadoCorreoYahoo = obtenerUsuariosCorreoYahoo(resultadoAgregar.usuariosActualizados);
let resultadoTemaClaro = obtenerUsuariosClaroMayoresEspana(resultadoAgregar.usuariosActualizados);
let resultadoDatosFaltantes = obtenerUsuariosDatosFaltantes(resultadoAgregar.usuariosActualizados);
let resultadoAgregarApellidos = agregarApellidos(resultadoAgregar.usuariosActualizados);
let resultadoAgregarCodigo = agregarCodigo(resultadoAgregar.usuariosActualizados);

// Imprimir los resultados
console.log(resultadoAgregar.mensaje);
console.log(imprimirUsuario(resultadoAgregar.usuario));
console.log("Usuarios actualizados:");
console.log(imprimirUsuario(resultadoAgregar.usuariosActualizados));

console.log(resultadoMayores.mensaje);
console.log(imprimirUsuario(resultadoMayores.usuarios));

console.log(resultadoCorreoYahoo.mensaje);
console.log(imprimirUsuario(resultadoCorreoYahoo.usuarios));

console.log(resultadoTemaClaro.mensaje);
console.log(imprimirUsuario(resultadoTemaClaro.usuarios));

console.log(resultadoDatosFaltantes.mensaje);
console.log(imprimirUsuario(resultadoDatosFaltantes.usuarios));

console.log(resultadoAgregarApellidos.mensaje);
console.log(imprimirUsuario(resultadoAgregarApellidos.usuarios));

console.log(resultadoAgregarCodigo.mensaje);
console.log(imprimirUsuario(resultadoAgregarCodigo.usuarios));