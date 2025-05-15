/** Definir variables */
const contactos = [];
const form = document.forms['contactoForm'];
const table = document.getElementById('contactosTable');
const crearBtn = document.getElementById('crearBtn');
const modalForm = document.getElementsByClassName('modal')[0];
const cerrarModal = document.getElementById('cerrarModal');


/** Definición de métodos */
const guardarContacto = () => {
    const contacto = {
        nombre: form['nombre'].value,
        email: form['correo'].value
    };
    contactos.push(contacto);
    visualizarContactos();
}

const visualizarContactos = () => {
    // let rows = '';
    // for(let index in contactos){
    //     const item = contactos[index];
    //     rows += `<tr>
    //         <td>${Number(index) + 1}</td>
    //         <td>${item.nombre}</td>
    //         <td>${item.email}</td>
    //     </tr>`;
    // }
    // const tBody = table.getElementsByTagName('tbody')[0];
    // tBody.innerHTML = rows;

    //     const tBody = table.getElementsByTagName('tbody')[0];
    //     tBody.innerHTML = contactos.map((item, index) => {
    //         return `<tr>
    //             <td>${Number(index) + 1}</td>
    //             <td>${item.nombre}</td>
    //             <td>${item.email}</td>
    //         </tr>`;
    //     }).join('');

    const tBody = table.getElementsByTagName('tbody')[0];
    tBody.innerHTML = '';
    contactos.map((item, index) => {
        const tr = document.createElement('tr');

        const tdNo = document.createElement('td');
        tdNo.textContent = Number(index) + 1;

        const tdNombre = document.createElement('td');
        tdNombre.textContent = item.nombre;

        const tdEmail = document.createElement('td');
        tdEmail.textContent = item.email;

        tr.appendChild(tdNo);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        return tr;
    }).forEach(tr => tBody.appendChild(tr));
}


/** Definición de eventos */
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    guardarContacto();
    modalForm.classList.add('cerrar-modal');
});

crearBtn.addEventListener('click', () => {
    form.reset();
    modalForm.classList.remove('cerrar-modal');
});

cerrarModal.addEventListener('click', () => {
    modalForm.classList.add('cerrar-modal');
});