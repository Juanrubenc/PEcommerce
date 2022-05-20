import { printTasks } from "./ui.js";

const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api';
let editingID = null;

function getProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const tasks = response.data;
            printTasks(tasks);
        })
        .catch(function (error) {
            console.log(error);
        })
}




function storeNewProducts() {
    const product = document.getElementById('addproduct').value
    const prices = document.getElementById('addprice').value
    const images = document.getElementById('addimg').value

    const NewProducts = {
        name: product,
        price: prices,
        image: images
    }

    axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', NewProducts,)
        .then(function (response) {
            console.log(response);
            alert('Se creo la tarea correctamente');
        })
        .catch(function (error) {
            alert('No se pudo crear la tarea');
            console.log(error);
        })
}

function deleteProduct(id) {
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return
    }
    axios.delete(`${baseURL}/products/${id}`)
        .then(function () {
            alert('La tarea se eliminó correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo eliminar la tarea');
        })
}

function editProduct(id) {
    axios.get(`${baseURL}/products/${id}`)
        .then(function (response) {
            editingID = id;
            const task =  response.data;
            document.getElementById('name').value = task.name;
            document.getElementById('precio').value = task.price;
            document.getElementById('imagen').value = task.image;

        })
        .catch(function (error) {
            alert('No se pudo cargar la tarea');
        })
}

function updateProduct() {
    const editedProduct = {
        image: document.getElementById('imagen').value,
        name: document.getElementById('name').value,
        price: document.getElementById('precio').value,
    }

    axios.put(`${baseURL}/products/${editingID}`, editedProduct)
        .then(function (response) {
            alert('Se editó la tarea correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo editar la tarea');
        })
}

export { getProducts, storeNewProducts, deleteProduct,editProduct, updateProduct}