
let formularioLogin = document.querySelector("#form-login");

formularioLogin.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.querySelector("#email-login").value;
    let password = document.querySelector("#password-login").value;

    if (email.length == 0) {
        alert("El email es obligatorio");

    } else if (password.length == 0) {
        alert("La contraseña es obligatoria");

    } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");

    } else {
        localStorage.setItem("email", email);
        location.href = "./index.html";
    }
});
