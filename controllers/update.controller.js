import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('.edit-product-form')

console.log(formulario)



const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        alert("ID Null")
        // window.location.href = ""
    }

    const imgUrl = document.querySelector("#url-input");
    const categoria = document.querySelector("#categoria-input");
    const nombre = document.querySelector("#nombre-input");
    const precio = document.querySelector("#precio-input");
    const descripcion = document.querySelector("#descripcion-input");

    // console.log(imgUrl, categoria, nombre, precio, descripcion)

    try {
        const producto = await clientServices.detalleProducto(id)

        if (producto.url && producto.category && producto.name && producto.price && producto.description) {
            imgUrl.value = producto.url;
            categoria.value = producto.category;
            nombre.value = producto.name;
            precio.value = producto.price;
            descripcion.value = producto.description;
            // eliminamos el then() porque la respuesta ya viene con el await
        } else {
            throw new Error();
        }
    } catch (error) {
        // console.log(error);
        alert(error);
        // windows.location.href = ""
        // Podemos envarlo a otro html indicando que hubo un error
    }


};

obtenerInformacion();

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imgUrl = document.querySelector("#url-input").value;
    const categoria = document.querySelector("#categoria-input").value;
    const nombre = document.querySelector("#nombre-input").value;
    const precio = document.querySelector("#precio-input").value;
    const descripcion = document.querySelector("#descripcion-input").value;

    console.log(imgUrl, categoria, nombre, precio, descripcion)


    clientServices.actualizarProducto(imgUrl, nombre, precio, categoria, descripcion, id).then(respuesta => console.log(respuesta));
});