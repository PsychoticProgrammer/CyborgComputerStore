import { Cart } from '../JavascriptPatterns/composer/Cart.js'
var globalCart = JSON.parse(localStorage.getItem("cart"));
/* CONVIERTE UN OBJETO GENÉRICO A UNA CLASE EN ESPECÍFICO */
var cart = Object.assign(new Cart(), globalCart);
console.log(cart);


const table = document.getElementById('tableBilling');
const totalElement=document.getElementById('totalCost');
const totalBold=totalElement.querySelector('b');
generateTable();
totalBold.innerText= totalPrice();

//event listener to copen modalMethodPayment
//modalMethodPayment
//btnOpenModal

const btnOpenModal=document.getElementById('btnOpenModal');
const modalMethodPayment=document.getElementById('modalMethodPayment')
const btnCloseModal=document.getElementById('close');


//-----------------Event listener
btnOpenModal.addEventListener('click', function(){
    modalMethodPayment.classList.add('show');
    modalMethodPayment.style.display='block';
    //se agrega clase al cuerpo para evitar que el modal sea desplazable
    document.body.classList.add('modal-open');
});

modalMethodPayment.addEventListener('click', function(){
    if(event.target === modalMethodPayment || event.target===btnCloseModal){
        modalMethodPayment.classList.remove('show');
        modalMethodPayment.style.display='none';
        document.body.classList.remove('modal-open');
    }

});

//-----------------functions
function generateTable() {
    table.innerHTML = '';

    //label thead
    const thead=document.createElement('thead');
    
    //row header
    const header = document.createElement('tr');
    const headerName = document.createElement('th');
    headerName.textContent = 'Producto';
    const headerModel = document.createElement('th');
    headerModel.textContent = 'Modelo';
    const headerBrand = document.createElement('th');
    headerBrand.textContent = 'Marca';
    const headerPrice = document.createElement('th');
    headerPrice.textContent = 'Precio';
    header.appendChild(headerName);
    header.appendChild(headerModel);
    header.appendChild(headerBrand);
    header.appendChild(headerPrice);
    thead.appendChild(header);
    table.appendChild(thead);
    
    //tbdoy label
    const tbody=document.createElement('tbody');

    //row data 
    for (let i = 0; i < cart.products.length; i++) {
        //const shopping = cart;
        const row = document.createElement('tr');
        const rowProduct = document.createElement('td');
        rowProduct.textContent = cart.products[i].product.name;
        const rowModel = document.createElement('td');
        rowModel.textContent = cart.products[i].product.model;
        const rowBrand = document.createElement('td');
        rowBrand.textContent = cart.products[i].product.trademark.name;
        const rowPrice = document.createElement('td');
        rowPrice.textContent = cart.products[i].product.price;
        
        row.appendChild(rowProduct);
        row.appendChild(rowModel);
        row.appendChild(rowBrand);
        row.appendChild(rowPrice);
        tbody.appendChild(row)
        table.appendChild(tbody);
    }
}

function totalPrice(){
    return cart.products.reduce((total, item) => total + item.product.price, 0);
}



