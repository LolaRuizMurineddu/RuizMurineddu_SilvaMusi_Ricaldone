
let emailGuardado = localStorage.getItem("email");

if (emailGuardado != null) {

    document.querySelector("#saludo-usuario").innerText = " Bienvenido: " + emailGuardado;

    document.querySelector("#saludo-usuario").style.display = "block";
    document.querySelector("#link-logout").style.display = "block";

    document.querySelector("#menu-login").style.display = "none";
    document.querySelector("#menu-registro").style.display = "none";


document.querySelector("#saludo-usuario").style.color='#6d2e46';
document.querySelector("#saludo-usuario").style.fontWeight="bold";
}
