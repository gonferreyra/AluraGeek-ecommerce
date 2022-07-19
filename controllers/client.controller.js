import { clientServices } from "../service/client-service.js";

// console.log(clientServices)

const productsContainer = document.querySelector('.products'); // Este es el div donde hacemos el appendChild para el json. Agregar la misma class en index.html para hacer lo mismo.

const crearNuevaCard = (name, price, id, url) => {
    const card = document.createElement('div');
    card.classList.add("product-card-2");
    card.innerHTML = `
        <div class="product-card-img">
            <img src="${url}" alt="">
            <div class="icons">
                <button id='${id}' class="icon-btn-1"><img src="./img/Trashcan.png" alt=""></button>
                <button id='edit_btn_${id}' class="icon-btn-2"><a href="./edit-product.html?id=${id}"><img src="./img/edit.png" alt=""></a></button>
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
        console.log(id)
        clientServices.eliminarProducto(id)
            .then(respuesta => {
                window.location.reload();
                // refresh web
                console.log(respuesta)
            })
            .catch(error => console.log(error))
    })
    return card;
}

clientServices.productList()
    .then((data) => {
        data.forEach(products => {
            const { name, price, id, url } = products
            const newLine = crearNuevaCard(name, price, id, url);
            productsContainer.appendChild(newLine);
        })
        // console.log(data)
    })
    .catch((error) => console.log(error));
