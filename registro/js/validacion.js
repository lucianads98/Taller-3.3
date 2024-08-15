document.getElementById("form").addEventListener("submit", function(event) {
     event.preventDefault();

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("form").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").ariaValueMax.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const terminos = document.getElementById("terminos").checked;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const mensajeError = document.getElementById("mensajeError");
    
    if (password1 !== password2) {
        mensajeError.textContent = "Las contraseñas no coinciden.";
        event.preventDefault();  
    } else {
        mensajeError.textContent = "";
    }
}));

