
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");


let contenedorCategoria = document.querySelector("#productos-categoria");

fetch(`https://dummyjson.com/products/category/${categoria}?limit=0`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let productos = "";

        for(let i = 0; i < data.products.length; i++){

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

        contenedorCategoria.innerHTML = productos;

document.querySelector(".nuevos").innerHTML = `// ${categoria}`;


    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });
