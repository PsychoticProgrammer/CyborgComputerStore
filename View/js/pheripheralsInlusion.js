import { PeripheralsConsumer } from './peripheralsConsumer.js';
import {Cart} from '../JavascriptPatterns/composer/Cart.js'

var globalCart = JSON.parse(localStorage.getItem("cart"));
/* CONVIERTE UN OBJETO GENÉRICO A UNA CLASE EN ESPECÍFICO */
var cart = Object.assign(new Cart(),globalCart);

window.onload = async function(){
    let peripherals = await PeripheralsConsumer.getPeripherals();
    
    addComponentsCards(peripherals,"peripheralsSection");

    addListenersToComponent("KEYBOARD",peripherals[0]);
    addListenersToComponent("MOUSE",peripherals[1]);
    addListenersToComponent("SCREEN",peripherals[2]);
    addListenersToComponent("SPEAKERS",peripherals[3]);

    setInCartColors();
}

/*Método encargado de insertar los productos*/
function addComponentsCards(components,targetSection){
    let section = document.getElementById(targetSection);
    for(let i = 0; i < components.length; i++){
        for(let j = 0; j < components[i].length; j++){
            let currentProduct = components[i][j];
            section.innerHTML += 
            `<div class="col-lg-6">
                <div class="item">
                  <img src="${currentProduct.getImage()}" alt="" class="templatemo-item">
                  <h4>${currentProduct.getName()}</h4>
                  <span>${currentProduct.getTrademark().getName()} ${currentProduct.getModel()} </span>
                  <span>${uniqueChar(currentProduct)}</span>
                  <span>$ ${currentProduct.getPrice()}</span>
                  <ul>
                  <li style="text-align: center;">
                  <i class="fa fa-star"></i> 4.8
                  </li>
                  <li class="main-button" style="color: black;" id="${currentProduct.getName()}">
                  <a  id="${currentProduct.getCode()}">${isInCart(currentProduct)}</a>
                  </li>
                  </ul>
                  <div>
                    <p>${currentProduct.getDescription()}</p>
                  </div>
                </div>
            </div>`;
            console.log(currentProduct.getImage());
        }
    }
}

/* funcion para agregar los eventos a cada boton con de las clases */
function addListenersToComponent(productName,list){
    let buttonSections = document.querySelectorAll(`#${productName}`);
    for(let i = 0; i < buttonSections.length; i++){
        buttonSections[i].addEventListener("click",function(e){
            let button = e.target;
            if(button.innerHTML == "Add to Cart"){
                button.innerHTML = "Remove";
                cart.addProduct(searchPeripheral(list,button.id));
                button.style.backgroundColor = "#fff";

                localStorage.setItem("cart",JSON.stringify(cart));
                console.log(JSON.parse(localStorage.getItem("cart")));
                return;
            }
            button.innerHTML="Add to Cart";
            button.style.backgroundColor = '#e75e8d';
            cart.removeProduct(button.id);
            
            localStorage.setItem("cart",JSON.stringify(cart));
            console.log(JSON.parse(localStorage.getItem("cart")));
        });
    }
}

/* Busca y devuelve la computadora seleccionada */
function searchPeripheral(array,peripheralCode){
    for(let i = 0; i < array.length; i++){
        if(array[i].getCode() == peripheralCode){
            return array[i];
        }
    }
}

function uniqueChar(product){
    switch(product.getName()){
        case "KEYBOARD":
            return product.getType();
        case "MOUSE":
            return product.getIsWireless() == "TRUE" ? "Wireless" : "Wired";
        case "SCREEN":
            return product.getSize() + " inch";
        case "SPEAKERS":
            return product.getPower() + " db";
    }
}

/* En caso de que ya se haya seleccionado, se marca como presente en el carrito, evitando inconsistencias */
function isInCart(product){
    let cartProducts = cart.getProducts();
    for(let i = 0; i < cartProducts.length; i++){
        if(product.getCode() == cartProducts[i].product.code){
            return "Remove from Cart";
        }
    }
    return "Add to Cart";
}

function setInCartColors(){
    let btns = document.querySelectorAll(".main-button");
    for(let i = 0; i < btns.length; i++){
        if(btns[i].childNodes[1].innerHTML == "Remove from Cart"){
            btns[i].childNodes[1].style.backgroundColor = "#fff";
        }
    }
}