/** Definición de variables */
const personasTb = document.getElementById('personasTable');
const personaForm = document.forms['personasForm'];
const domainEnpoint = 'http://127.0.0.1:8000/api';

/** Definición de métodos */

const queryPersonas = () => {
    fetch(`${domainEnpoint}/personas`)
        .then(resp => resp.json())
        .then(body => {
            const data = body.data;
            cargarTabla(data);
        })
        .catch(() => alert('Error de conexión'))
};

const cargarTabla = (personas) => {
    const tbody = personasTb.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    for(let item of personas){
        const idTd = document.createElement('td');
        idTd.textContent = item.id;

        const nombreTd = document.createElement('td');
        nombreTd.textContent = item.nombre;

        const emailTd = document.createElement('td');
        emailTd.textContent = item.email;

        const edadTd = document.createElement('td');
        edadTd.textContent = item.edad;

        const modificarBtn = document.createElement('button');
        modificarBtn.textContent = 'Modificar';

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';

        const operacionesTd = document.createElement('td');
        operacionesTd.appendChild(modificarBtn);
        operacionesTd.appendChild(eliminarBtn);

        const tr = document.createElement('tr');
        tr.appendChild(idTd);
        tr.appendChild(nombreTd);
        tr.appendChild(emailTd);
        tr.appendChild(edadTd);
        tr.appendChild(operacionesTd);

        tbody.appendChild(tr);
    }
};

queryPersonas();

/** Definición de eventos */