/** Definición de variables */
const personasTb = document.getElementById('personasTable');
const personaForm = document.forms['personasForm'];
const domainEnpoint = 'http://127.0.0.1:8000/api';
const crearBtn = document.getElementById('crearBtn');
const contentForm = document.getElementById('contentForm');
const cancelarBtn = document.getElementById('cancelarBtn');
let metodo = '';

/** Definición de métodos */

class Servicios {
    static queryPersonas(success, error) {
        fetch(`${domainEnpoint}/personas`)
            .then(resp => resp.json())
            .then(body => {
                const data = body.data;
                success(data);
            })
            .catch(() => error())
    }

    static savePersona(persona, success, error) {
        fetch(`${domainEnpoint}/persona`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: persona.id,
                name: persona.nombre,
                email: persona.email,
                age: persona.edad
            })
        })
            .then(resp => resp.json())
            .then(body => success(body.data))
            .catch(() => error())
    }

    static updatePersona(persona, success, error) {
        fetch(`${domainEnpoint}/persona/${persona.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: persona.nombre,
                email: persona.email,
                age: persona.edad
            })
        })
            .then(resp => resp.json())
            .then(body => success(body.data))
            .catch(() => error())
    }

    static deletePersona(id, success, error) {
        fetch(`${domainEnpoint}/persona/${id}`, { method: 'delete' })
            .then(resp => resp.json())
            .then(body => success(body.data))
            .catch(() => error())
    }
}

const cargarTabla = (personas) => {
    const tbody = personasTb.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    for (let item of personas) {
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
        modificarBtn.addEventListener('click', () => {
            metodo = 'modificar';
            contentForm.classList.add('mostrarForm');
            personaForm['idInput'].value = item.id;
            personaForm['nombreInput'].value = item.nombre;
            personaForm['emailInput'].value = item.email;
            personaForm['edadInput'].value = item.edad;
        });

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click',()=>{
            eliminarPersona(item.id);
        });

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

const consultaPersonas = () => {
    Servicios.queryPersonas(
        (personas) => cargarTabla(personas),
        () => { alert('Error en el servicio') }
    );
};

consultaPersonas();

const crearPersona = () => {
    const persona = {
        id: personaForm['idInput'].value,
        nombre: personaForm['nombreInput'].value,
        email: personaForm['emailInput'].value,
        edad: personaForm['edadInput'].value,
    };
    Servicios.savePersona(persona,
        () => consultaPersonas(),
        () => alert('Error en el servicio')
    );
}

const modificarPersona = () => {
    const persona = {
        id: personaForm['idInput'].value,
        nombre: personaForm['nombreInput'].value,
        email: personaForm['emailInput'].value,
        edad: personaForm['edadInput'].value,
    };
    Servicios.updatePersona(persona,
        () => consultaPersonas(),
        () => alert('Error en el servicio')
    );
}

const eliminarPersona = (id) => {
    Servicios.deletePersona(id,
        () => consultaPersonas(),
        () => alert('Error en el servicio')
    );
}

/** Definición de eventos */

crearBtn.addEventListener('click', () => {
    metodo = 'crear';
    contentForm.classList.add('mostrarForm');
    personaForm.reset();
});

cancelarBtn.addEventListener('click', () => {
    contentForm.classList.remove('mostrarForm');
});

personaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (metodo == 'crear') {
        crearPersona();
    } else if (metodo == 'modificar') {
        modificarPersona();
    }
    personaForm.reset();
    contentForm.classList.remove('mostrarForm');
});