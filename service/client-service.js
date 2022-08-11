// URL's
const url = "http://localhost:3000/products";
const fakeAPI = "https://my-json-server.typicode.com/gonferreyra/Json-fakeAPI/products"

const productList = async () => {
    try {
        // const respuesta = await fetch(url);
        const respuesta = await fetch(fakeAPI);
        return respuesta.json();
    } catch (error) {
        console.log(error);
    }
}
// fetch(url).then((respuesta) => respuesta.json());

const agregarProducto = (url, category, name, price, description) => {
    // return fetch("http://localhost:3000/products", {
    return fetch("https://my-json-server.typicode.com/gonferreyra/Json-fakeAPI/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, category, name, price, description })
    });
};

const eliminarProducto = (id) => {
    // return fetch(`http://localhost:3000/products/${id}`, {
    return fetch(`https://my-json-server.typicode.com/gonferreyra/Json-fakeAPI/products/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = async (id) => {
    try {
        const respuesta = await fetch(`https://my-json-server.typicode.com/gonferreyra/Json-fakeAPI/products/${id}`)
        // const respuesta = await fetch(`http://localhost:3000/products/${id}`)
        return respuesta.json();
    } catch (error) {
        console.log(error);
    }

};

const actualizarProducto = async (url, name, price, category, description, id) => {
    try {
        // const respuesta = await fetch(`http://localhost:3000/products/${id}`, {
        const respuesta = await fetch(`https://my-json-server.typicode.com/gonferreyra/Json-fakeAPI/products/${id}`, {
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
    fetch(`https://my-json-server.typicode.com/gonferreyra/Json-fakeAPI/products/${id}`)
        .then(respuesta => respuesta.json())
}

export const clientServices = {
    productList,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};