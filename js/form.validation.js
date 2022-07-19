import * as v from './variables.js'



export const validateName = (e) => {
    e.preventDefault();
    if (v.inputName.value === "") {
        console.log('El campo nombre no debe quedar vacio. Por favor completar con sus datos');
    }
    // Falta validar que envie el mensaje (ver el curso de validacion)
}

const adminEmail = "admin@alurageek.com";
const adminPass = 123456;

export const validateLogin = (e) => {
    e.preventDefault();
    if (v.adminLoginEmail.value != adminEmail) {
        console.log("error")
    }
}