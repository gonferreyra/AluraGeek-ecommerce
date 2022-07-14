import { clientServices } from "../service/client-service.js";

const form = document.querySelector('.add-product-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = document.querySelector('#url-input').value;
    const category = document.querySelector('#categoria-input').value;
    const name = document.querySelector('#nombre-input').value;
    const price = document.querySelector('#precio-input').value;
    const description = document.querySelector('#descripcion-input').value;
    // console.log(categoria, nombre, precio)

    clientServices
        .agregarProducto(url, category, name, price, description)
        .then((respuesta) => {
            window.location.href = "./registro-completado.html" // Agregar html para mostrar mensaje
            // alert('Producto agregado satisfactoriamente')
        })
        .catch((error) => console.log(error))

})