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

export const loginValidation = () => {
    let email = v.adminLoginEmail.value;
    let password = v.adminLoginPass.value;
    if (email == adminEmail && password == adminPass) {
        console.log('datos correctos')
        document.location.href = 'admin.html'
    } else {
        console.log("error");
        errorMessageLogin(v.loginErrorDiv, "error");
    }
}

export function errorMessageLogin(insertDiv, error) {
    cleanErrorLogin();
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.classList.add('error-login');

    //Insertarlo en el contenido HTML
    insertDiv.appendChild(errorMessage);
    // cleanHTML();

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        errorMessage.remove();
    }, 83000);
};

function cleanErrorLogin() {
    while (v.loginErrorDiv.firstChild) {
        v.loginErrorDiv.removeChild(v.loginErrorDiv.firstChild)
    }
}