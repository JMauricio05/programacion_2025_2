// document.getElementById('titulo')
//     .textContent = "Hola Pepe!!!";

// document.getElementById('titulo')
//     .innerText = "Hola Pepe!!!";

// document.addEventListener('DOMContentLoaded',()=>{
//     document.getElementById('titulo')
//     .innerHTML = "Hola <i>Pepe</i>!!!";
// });

document.getElementById('titulo')
    .innerHTML = "Hola <i>Pepe</i>!!!";


document.getElementById('saludarBtn')
    .addEventListener('click', () => {
        console.log('Click del botón saludar');

        const nombre = document.getElementById('nmInput')
            .value;
        document.getElementById('titulo')
            .innerText = "Hola " + nombre + "!!!!!";
    });


const saludarForm = document.forms['saludarForm'];
const nombreError = document.getElementById('nombreError');
nombreError.style.color = "#ff0000";
const nombreLb = document.getElementById('nombreLb');


saludarForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nombreInput = saludarForm['nombre'].value;
    if (!nombreInput) {
        nombreError.style.display = 'block';
        nombreLb.classList.add('error');
    } else {
        nombreLb.classList.remove('error');
        nombreError.style.display = 'none';
        document.getElementById('titulo')
            .innerText = `Hola ${nombreInput}!!!!!`;
    }

});

// function nombreKeyDown(){

// }

// const nombreKeyDown = function (){

// }

const nombreKeyUp = ()=> {
    const nombreInput = saludarForm['nombre'].value;
    if (!nombreInput) {
        nombreError.style.display = 'block';
        nombreLb.classList.add('error');
    } else {
        nombreLb.classList.remove('error');
        nombreError.style.display = 'none';
    }
}