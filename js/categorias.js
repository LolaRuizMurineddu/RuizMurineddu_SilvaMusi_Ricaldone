let listaCategorias = document.querySelector("#lista-categorias");

fetch('https://dummyjson.com/products/categories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let categorias = '<h3 class="titulocate">CATEGORIAS</h3>';

        for(let i = 0; i < data.length; i++){

            categorias = categorias + `
                <li>
                    <a href="./category.html?category=${data[i].slug}">
                        ${data[i].name}
                    </a>
                </li>
            `;

        }

        listaCategorias.innerHTML = categorias;

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });