
// Le enviamos como parametro, ademas del error, el div donde insertarlo

export function errorMessage(insertDiv, error) {
    // cleanHTML();
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.classList.add('error');

    //Insertarlo en el contenido HTML
    insertDiv.appendChild(errorMessage);
    // cleanHTML();

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
};