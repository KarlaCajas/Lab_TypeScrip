"use strict";
// variables.ts
// String
let nombre = "Juan";
// Number
let edad = 30;
// Boolean
let esEstudiante = true;
// Array
let notas = [80, 90, 85];
// Tuple
let persona = ["Lizbeth", 30];
// Enum
var Color;
(function (Color) {
    Color[Color["Amarrillo"] = 0] = "Amarrillo";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Celeste"] = 2] = "Celeste";
})(Color || (Color = {}));
let colorFavorito = Color.Verde;
// Operaciones básicas
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Es estudiante?: ${esEstudiante}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log(`Persona: ${persona[0]}, ${persona[1]}`);
console.log(`Color favorito: ${Color[colorFavorito]}`);
