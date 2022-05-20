function printTasks(product) {
    // Identificar el contenedor
    const container = document.getElementById('tasks-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < product.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3 ">
                    <div class="card shadow p-3 mb-5 bg-white rounded'>
                        <div class="card-body">
                        <div id=imagen><img class="card-img-top" src="${product[i].image}" alt="Card image cap"></div>         
                            <h5 class="card-title">${product[i].name}</h5>
                            <p class="card-text">${product[i].price}</p>
                            <div class="text-end">
                                <button class="btn btn-danger" onclick="deleteProduct(${product[i].id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-primary" onclick="editProduct(${product[i].id})">
                                    <i class="fas fa-pen"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

export { printTasks }



