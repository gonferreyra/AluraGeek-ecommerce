import { clientServices } from "../service/client-service.js";

const starwarsProducts = document.querySelector('.starwars-products');
const consoleProducts = document.querySelector('.console-products');

const crearNuevaCard = (name, price, url, category) => {
    const card = document.createElement('div');
    card.classList.add("product-card-2");
    card.innerHTML = `
            <div class="product-card-img">
                <img src="${url}" alt="">
            </div>
            <div class="product-card-name">
                <p>${name}</p>
            </div>
            <div class="product-card-price">
                <p>$ ${price}</p>
            </div>
            <div class="product-card-btn">
                <a href="product-1.html">Ver producto</a>
            </div>
    `
    return card;
}

clientServices.productList()
    .then((data) => {
        data.forEach(products => {
            // console.log(products.name, products.price, products.id)
            const newCard = crearNuevaCard(products.name, products.price, products.url, products.category);
            if (products.category === "starwars") {
                starwarsProducts.appendChild(newCard);
            } else if (products.category === "console") {
                consoleProducts.appendChild(newCard);
            }

        })
        console.log(data)
    })
    .catch((error) => alert('Ocurrio un error, debe iniciar el json server'));