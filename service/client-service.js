// URL's
// const url = "http://localhost:3000/products";
const mockApi = "https://62f58020535c0c50e770b15a.mockapi.io/database";

const productList = async () => {
    try {
        // const respuesta = await fetch(url);
        const respuesta = await fetch(mockApi);
        return respuesta.json();
    } catch (error) {
        console.log(error);
    }
}
// fetch(url).then((respuesta) => respuesta.json());

const agregarProducto = (url, category, name, price, description) => {
    // return fetch("http://localhost:3000/products", {
    return fetch("https://62f58020535c0c50e770b15a.mockapi.io/database/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, category, name, price, description })
    });
};

const eliminarProducto = (id) => {
    // return fetch(`http://localhost:3000/products/${id}`, {
    return fetch(`https://62f58020535c0c50e770b15a.mockapi.io/database/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = async (id) => {
    try {
        const respuesta = await fetch(`https://62f58020535c0c50e770b15a.mockapi.io/database/${id}`)
        // const respuesta = await fetch(`http://localhost:3000/products/${id}`)
        return respuesta.json();
    } catch (error) {
        console.log(error);
    }

};

const actualizarProducto = async (url, name, price, category, description, id) => {
    try {
        // const respuesta = await fetch(`http://localhost:3000/products/${id}`, {
        const respuesta = await fetch(`https://62f58020535c0c50e770b15a.mockapi.io/database/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url, name, price, category, description, id })
        });
        window.location.href = "admin.html"
        // return console.log(respuesta);
    } catch (error) {
        return console.log(error);
    }
};

const mostrarProducto = (id) => {
    // fetch(`http://localhost:3000/products/${id}`)
    fetch(`https://62f58020535c0c50e770b15a.mockapi.io/database/${id}`)
        .then(respuesta => respuesta.json())
}

export const clientServices = {
    productList,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};