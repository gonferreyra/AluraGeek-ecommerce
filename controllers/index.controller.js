import { clientServices } from "../service/client-service.js";
import * as v from '../js/variables.js';


// v.seeAllBtn.addEventListener('click', (e) => {
//     e.preventDefault()
// });

const starwarsProducts = document.querySelector('.starwars-products');
const consoleProducts = document.querySelector('.console-products');
const variousProducts = document.querySelector('.various-products');

export const crearNuevaCard = (name, price, url, id) => {
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
                <a id="show-product" href="product.html?id=${id}">Ver producto</a>
            </div>
    `
    return card;
}

clientServices.productList()
    .then((data) => {
        data.forEach(products => {
            const { name, price, url, category, id } = products
            const newCard = crearNuevaCard(name, price, url, id);
            if (category === "starwars") {
                starwarsProducts.appendChild(newCard);
            } else if (category === "console") {
                consoleProducts.appendChild(newCard);
            } else if (category === "various") {
                variousProducts.appendChild(newCard);
            }
        })
        console.log(data)
    })
    .catch(error => console.log(error));
// .catch((error) => alert('Ocurrio un error, debe iniciar el json server'));


