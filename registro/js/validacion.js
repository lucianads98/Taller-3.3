
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
} 

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const apellido = document.getElementById('apellido').value;
const contraseña = document.getElementById('password1').value;
const repcontraseña = document.getElementById('password2').value;
const terminos = document.getElementById('terminos').checked;

if(nombre === "" || email === "" || apellido === "" || contraseña.length < 6 || contraseña !== repcontraseña || !terminos) {
    showAlertError();
    return;
} else {
    showAlertSuccess();
}



});