import { clientServices } from "../service/client-service.js";

const productContainer = document.querySelector('.product-1_container');

const crearNuevaCard2 = (url, name, price, description) => {
    const card = document.createElement('div');
    card.classList.add("products-container-2");
    card.innerHTML = `
        <img src="${url}" alt="">
        <div class="product-container__information">
            <div class="product-container__title">
                <p>${name}</p>
            </div>
            <div class="product-container__price">
                <p>$ ${price}</p>
            </div>
            <div class="product-container__info">
                <p>${description}</p>
            </div>
        </div>
    `
    return card;
};

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    clientServices.detalleProducto(id).then((respuesta) => {
        const newCard = crearNuevaCard2(respuesta.url, respuesta.name, respuesta.price, respuesta.description);
        productContainer.appendChild(newCard);
    })

}

obtenerInformacion()



