document.getElementById("form").addEventListener("submit", function(event) {
     event.preventDefault();

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("form").addEventListener("submit", function(event) {
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