import { clientServices } from "../service/client-service.js";

// console.log(clientServices)

const productsContainer = document.querySelector('.products'); // Este es el div donde hacemos el appendChild para el json. Agregar la misma class en index.html para hacer lo mismo.

const crearNuevaCard = (name, price, id) => {
    const card = document.createElement('div');
    card.classList.add("product-card-2");
    card.innerHTML = `
        <div class="product-img card-${id}">
            <div class="icons">
                <button id='${id}' class="icon-btn-1"><img src="./img/Trashcan.png" alt=""></button>
                <button class="icon-btn-2"><img src="./img/edit.png" alt=""></button>
            </div>
        </div>
        <div class="product-name">
            <p>${name}</p>
        </div>
        <div class="product-price">
            <p>$ ${price}</p>
        </div>
        <div class="product-id">
            <p>#${id}</p>
        </div>
    `
    const btn = card.querySelector('button') //toma el primer boton para eliminar el producto
    btn.addEventListener('click', () => {
        const id = btn.id;
        clientServices.eliminarProducto(id)
            .then(respuesta => {
                console.log(respuesta)
            })
            .catch(error => console.log(error))
    })
    return card;
}

clientServices.productList()
    .then((data) => {
        data.forEach(products => {
            // console.log(products.name, products.price, products.id)
            const newLine = crearNuevaCard(products.name, products.price, products.id);
            productsContainer.appendChild(newLine);
        })
        console.log(data)
    })
    .catch((error) => alert('Ocurrio un error, debe iniciar el json server'));
