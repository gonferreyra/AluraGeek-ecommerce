import { validateName, loginValidation } from './form.validation.js';
import * as v from './variables.js'
import { valida } from './validaciones.js';
import { cleanHTML, searchProducts } from './search.js';


v.headerSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e)
    // cleanHTML();
    searchProducts();
})

const footerInputs = document.querySelectorAll(".footer-input input");
const footerTextArea = document.querySelectorAll(".footer-input textarea");

footerInputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});

footerTextArea.forEach(textarea => {
    textarea.addEventListener('blur', (textarea) => {
        valida(textarea.target)
    })
});

v.adminLoginEmail.addEventListener('blur', (input) => {
    valida(input.target)
});

v.adminLoginPass.addEventListener('blur', (input) => {
    valida(input.target)
});

v.adminLoginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    loginValidation();
});




