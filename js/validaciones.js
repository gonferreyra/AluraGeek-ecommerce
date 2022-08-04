export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    // console.log(input.parentElement.parentElement)
    if (input.validity.valid) {
        input.parentElement.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector('.input-msg-error').innerHTML = "";
    } else {
        input.parentElement.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-msg-error').innerHTML = mostrarMensajesDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "Debe contener al menos tantos caracteres..."
    },
    textarea: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "Debe contener menos de 120 caracteres"
    }
}

const validadores = {
    // nacimiento: input => validarNacimiento(input)

}

function mostrarMensajesDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(error)
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}