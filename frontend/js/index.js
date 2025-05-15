const content = document.getElementById('content');

const queryProductos = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
        .then(response => response.json())
        .then(data => visualizar(data))
        .catch((e) => {
            alert('Error de conexión!!!');
        })
        .finally(() => {
            console.log('fin del consumo');
        });
}

const queryProductosDos = async () => {
    try {
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const data = await response.json();
        visualizar(data);
        console.log('ok 2');
    } catch (e) {
        alert('Error de conexión!!!');
     }
     console.log('fin del consumo');
}

const visualizar = (data) => {
    for (let item of data) {
        const div = document.createElement('div');
        div.textContent = item.title;

        const img = document.createElement('img');
        img.src = item.image;
        img.style.width = '100px';
        div.appendChild(img);

        content.appendChild(div);
    }
}

// queryProductos();
// queryProductosDos().then(()=>{
//     console.log('ok 1');
// });
queryProductosDos();
