alert("Hola mundo!!!!")
console.log("Mesaje....");
//var, let y const
var nombre = "Pepe";
let apellido = 'Gomez';
const edad = 30;
const salario = 3000.50;
let casado = false; // true

apellido = "Perez";
// edad = 40;

let jobs = null;
jobs = undefined;

jobs = ["Cine", "Musica", "Deporte"];
// jobs = Array(2);
// jobs = "cine. musica, deporte";
let persona = {
    "nombre": "Ana",
    apellido: 'Gomez',
    edad: 32,
    jobs: ['Cine', 'Deportes'],
    opcionex: {}
};

console.log(persona.nombre);
console.log("Nombre: " + persona.nombre + " " + persona.apellido);
console.log(`Nombre: ${persona.nombre} ${persona.apellido}`);

let ejemplo = ['a', 20, true, [12, 3, 6,], {}, null];

console.log(nombre.toUpperCase());

if (persona.edad < 18) {
    //....
} else if (persona.edad < 25) {
    //....
} else {
    //....
}

/*
&& and
|| or 
! negación
== igual (valida solo el valor)
=== igual (valida el valor y el tipo de dato)
> mayor
< menor
>= mayor o igual
<= menor o igual
!= diferente
 */
console.log(2 == '2');
console.log(2 === '2');

let categoria = 'a';
switch (categoria) {
    case 'a':
        //...
        break;
    case 'b':
        //...
        break;
    default:
        //...
        break;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("For normal--------------------")
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}
console.log("For in--------------------")
for (let index in numeros) {
    console.log(numeros[index]);
}
console.log("For of--------------------")
for (let valor of numeros) {
    console.log(valor);
}
console.log("While--------------------")
let index = 0;
while (index < numeros.length) {
    console.log(numeros[index]);
    index++;
}
console.log("DO While--------------------")
index = 0;
do {
    console.log(numeros[index]);
    index++;
} while (index < numeros.length);

console.log("Foreach--------------------")

numeros.forEach((valor, index) => {
    console.log(`${index}: ${valor}`);
});

function saludar() {
    console.log('Hola');
}
saludar();

function saludar2(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar2('Pepe');
function getSaludo(nombre) {
    return "Hola " + nombre;
}
console.log(getSaludo('Ana'));

const saludarTres = function(nombre){
    console.log(`Hola ${nombre}`);
}
saludarTres('Pedro');

const saludar4 = function(nombre){
    return `Hola ${nombre}`;
}
console.log(saludar4('Ana'));

const saludar5 = (nombre) => {
    console.log(`Hola ${nombre}`);
}
saludar5('Juan');