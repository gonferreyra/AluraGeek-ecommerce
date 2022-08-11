import { validateName, loginValidation, errorMessageLogin } from './form.validation.js';
import * as v from './variables.js'
import { valida } from './validaciones.js';
import { cleanHTML, searchProducts } from './search.js';

if (v.adminLoginbtn) {
    v.adminLoginbtn.addEventListener('click', () => {
        errorMessageLogin(v.loginErrorDiv, "Debe iniciar cesion para acceder al menu administrador.")
    });
}

if (v.headerSearchBtn) {
    v.headerSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchProducts();
    });
}

v.footerInputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});

v.footerTextArea.forEach(textarea => {
    textarea.addEventListener('blur', (textarea) => {
        valida(textarea.target)
    })
});

if (v.adminLoginEmail) {
    v.adminLoginEmail.addEventListener('blur', (input) => {
        valida(input.target)
    });
}

if (v.adminLoginPass) {
    v.adminLoginPass.addEventListener('blur', (input) => {
        valida(input.target)
    });
}

if (v.adminLoginBtn) {
    v.adminLoginBtn.addEventListener('click', (e) => {
        e.preventDefault()
        loginValidation();
    });
}