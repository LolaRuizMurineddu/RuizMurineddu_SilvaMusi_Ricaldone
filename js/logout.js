
let botonLogout = document.querySelector("#boton-logout");

botonLogout.addEventListener("click", function(event){
    event.preventDefault();

    localStorage.removeItem("email");

    document.querySelector("#saludo-usuario").innerText = "";

    document.querySelector("#saludo-usuario").style.display = "none";
    document.querySelector("#link-logout").style.display = "none";

    document.querySelector("#menu-login").style.display = "";
    document.querySelector("#menu-registro").style.display = "";
});
