let formulario = document.querySelector(".buscar");

formulario.addEventListener("submit", function(evento) {

    let busqueda = document.querySelector(".buscar input").value;

    if (busqueda.length == 0) {
        evento.preventDefault();
        alert("El campo de búsqueda no puede estar vacío");
    } else if (busqueda.length < 3) {
        evento.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});