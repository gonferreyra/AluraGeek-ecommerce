import * as v from './variables.js'
import { errorMessage } from './error.js';


export const validateName = (e) => {
    // e.preventDefault();
    if (v.inputName.value === "" || v.inputMsg.value === "") {
        errorMessage(v.footerError, "Los campos de nombre y mensaje no debe quedar vacio. Por favor ingrese sus datos");
    }
};

const adminEmail = "admin@alurageek.com";
const adminPass = 123456;

export const validateLogin = (e) => {
    e.preventDefault();
    if (v.adminLoginEmail.value != adminEmail) {
        console.log("error")
    }
};