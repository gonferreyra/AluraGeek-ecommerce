import { validateName, validateLogin } from './form.validation.js';
import * as v from './variables.js'
import { valida } from './validaciones.js';

const inputs = document.querySelectorAll("input");
const textArea = document.querySelectorAll("textarea");

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
})

textArea.forEach(textarea => {
    textarea.addEventListener('blur', (textarea) => {
        valida(textarea.target)
    })
})

// v.adminLoginBtn.addEventListener('submit', validateLogin);

// v.footerBtn.addEventListener('click', validateName);




