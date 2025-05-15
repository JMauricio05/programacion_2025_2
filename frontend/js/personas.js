const domainEnpoint = 'http://127.0.0.1:8000/api';

const listarPersonas = () => {
    fetch(`${domainEnpoint}/personas`)
        .then(resp => resp.json())
        .then(body => {
            console.log(body.data);
        })
        .catch(() => alert('Error de conexión'));
};


const listarPersonasDos = async () => {
    try {
        const resp = await fetch(`${domainEnpoint}/personas`)
        const body = await resp.json();
        console.log(body);
    } catch (error) {
        alert('Error de conexión');
    }
}

const guardarPersona = () => {
    fetch(`${domainEnpoint}/persona`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: 6,
            name: 'Pepe',
            email: 'pepe5@test.com',
            age: 32
        })
    })
        .then(resp => resp.json())
        .then(info => alert(info.data))
        .catch(() => alert('Error al crear el servicio'))
}

listarPersonas();
guardarPersona();