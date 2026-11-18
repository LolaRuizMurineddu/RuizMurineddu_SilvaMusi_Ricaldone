
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");


console.log(id);



fetch('https://dummyjson.com/products/' + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        document.querySelector("#nombre-producto").innerText = data.title;


        document.querySelector("#imagen-chica").src = data.thumbnail;
        document.querySelector("#imagen-grande").src = data.images[0];


document.querySelector("#precio-producto").innerText = `$${data.price}`;


document.querySelector("#descripcion-producto").innerText = data.description;


document.querySelector("#categoria-producto").innerText = data.category;

document.querySelector("#categoria-producto").href = "./category.html?category=" + data.category;


document.querySelector("#stock-producto").innerText = data.stock;


document.querySelector("#ruta-producto").innerText = data.title;

document.querySelector("#ruta-categoria").innerText = data.category;

document.querySelector("#ruta-categoria").href = "./category.html?category=" + data.category;




let resenas = "";

for (let i = 0; i < data.reviews.length; i++) {

    resenas = resenas + `
        <div class="comentarios1">
            <h3>${data.reviews[i].reviewerName}</h3>
            <p>Calificación: ${data.reviews[i].rating}/5</p>
            <p>${data.reviews[i].comment}</p>
            <p>Fecha: ${data.reviews[i].date}</p>
        </div>
    `;

}

if (data.reviews.length == 0) {
    resenas = "<p>Este producto todavía no tiene reseñas.</p>";
}

document.querySelector("#resenas-producto").innerHTML = resenas;


let etiquetas = "";

for (let i = 0; i < data.tags.length; i++) {
    if (i < 3) {
        etiquetas = etiquetas + `<li>#${data.tags[i]}</li>`;
    }
}

document.querySelector("#tags-producto").innerHTML = etiquetas;


if (data.brand == undefined) {
    document.querySelector("#marca-producto").innerText = "Sin marca";
} else {
    document.querySelector("#marca-producto").innerText = data.brand;
}



    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });

