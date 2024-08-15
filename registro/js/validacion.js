document.getElementById("form").addEventListener("submit", function(event) {
     event.preventDefault();

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const apellido = document.getElementById('apellido')
const contraseña = document.getElementById('password1')
const repcontraseña = document.getElementById('password2')

if(password1 <= 6){
showAlertError()
}
     
    if (password1 !== password2) {
        showAlertError()
    }

      if(nombre.value == 0) {
    
        showAlertError()
    }else{
        showAlertSuccess()
    }

    if(apellido.value == 0) {
    
        showAlertError()
    }else{
        showAlertSuccess()
    }

    if(email.value == 0) {
    
        showAlertError()
    }else{
        showAlertSuccess()
    }
}));

