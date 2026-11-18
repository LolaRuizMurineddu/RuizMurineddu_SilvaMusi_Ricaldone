
let formularioRegistro = document.querySelector("#form-registro");

formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.querySelector("#email-registro").value;
    let password = document.querySelector("#password-registro").value;
    let confirmar = document.querySelector("#confirmar-password").value;

    if (email.length == 0 || password.length == 0 || confirmar.length == 0) {
        alert("Todos los campos son obligatorios.");
    } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    } else if (password != confirmar) {
        alert("Las contraseñas no coinciden");
    } else {
        location.href = "./login.html";
    }
});
