// URL's
const url = "http://localhost:3000/products";

const productList = () =>
    fetch(url).then(respuesta => respuesta.json());

const agregarProducto = (url, category, name, price, description) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, category, name, price, description })
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    })
}

export const clientServices = {
    productList,
    agregarProducto,
    eliminarProducto,
};