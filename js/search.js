import * as v from './variables.js';
import { errorMessage } from './error.js';
import { clientServices } from "../service/client-service.js";
// import { crearNuevaCard } from '../controllers/index.controller.js'

const crearNuevaCardSearch = (name, price, url, id) => {
    const card = document.createElement('div');
    card.classList.add("product-card-2-search");
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

export const searchProducts = () => {
    cleanHTML()
    // console.log(v.searchResult.firstChild)

    // let searchResult = [];
    let searchValue = v.headerSearchInput.value.toLowerCase();
    if (searchValue === "") {
        errorMessage(v.searchErrorDiv, "Busqueda vacia, debe ingresar un precio, categoria o nombre para buscar");
        return;
    } else {
        clientServices.productList()
            .then((data) => {
                data.forEach(products => {
                    const { name, price, url, category, id } = products;
                    const newCard = crearNuevaCardSearch(name, price, url, id);
                    if (name.toLowerCase().includes(searchValue)) {
                        // cleanHTMLSearch();
                        v.searchResult.appendChild(newCard);
                    } else if (price.toString().includes(searchValue)) {
                        v.searchResult.appendChild(newCard);
                    }
                })
            })
        cleanHTMLSearch()
    }

};

export function cleanHTML() {
    while (v.searchResult.firstChild) {
        v.searchResult.removeChild(v.searchResult.firstChild)
    }
}

// Borra el fetch de las 3 categorias y deja solo el de la busqueda
export function cleanHTMLSearch() {
    while (v.starWarsProductsLine.firstChild) {
        v.starWarsProductsLine.removeChild(v.starWarsProductsLine.firstChild)
        v.consoleProductsLine.removeChild(v.consoleProductsLine.firstChild)
        v.variousProductsLine.removeChild(v.variousProductsLine.firstChild)
    }
}