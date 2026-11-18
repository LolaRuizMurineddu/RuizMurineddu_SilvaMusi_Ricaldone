
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("q");

let contenedorBusqueda = document.querySelector("#resultados-busqueda");

document.querySelector("#titulo-busqueda").innerText = "Resultados de búsqueda: " + busqueda;

fetch('https://dummyjson.com/products/search?q=' + busqueda)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let productos = "";

        if (data.products.length == 0) {
            productos = "<p>No se encontraron productos para tu búsqueda.</p>";
        } else {

            for (let i = 0; i < data.products.length; i++) {

                productos = productos + `
                    <article class="prendas">
                        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                        <h3>${data.products[i].title}</h3>
                        <p>${data.products[i].description}</p>
                        <p class="precio">$${data.products[i].price}</p>
                        <div class="botondet">
                            <a href="./product.html?id=${data.products[i].id}">Ver detalle</a>
                        </div>
                    </article>
                `;

            }

        }

        contenedorBusqueda.innerHTML = productos;

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });
