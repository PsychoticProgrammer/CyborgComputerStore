import {ComputerConsumer} from './computerConsumer.js';
import {Cart} from '../JavascriptPatterns/composer/Cart.js';

var globalCart = JSON.parse(localStorage.getItem("cart"));
/* CONVIERTE UN OBJETO GENÉRICO A UNA CLASE EN ESPECÍFICO */
var cart = Object.assign(new Cart(),globalCart);

window.onload = async function(){
    let computers = await ComputerConsumer.getComputers();
    
    addComponentsCards(computers,"computersSection");
    
    addListenersToComponent("COMPUTER",computers);
    setInCartColors();
}

/*Método encargado de insertar los productos*/
function addComponentsCards(computers,targetSection){
    let section = document.getElementById(targetSection);
    for(let i = 0; i < computers.length; i++){
        let ram = computers[i].searchProduct("RAM");
        let processor = computers[i].searchProduct("PROCESSOR");
        let graphicCard = computers[i].searchProduct("GRAPHIC CARD");
        let mb = computers[i].searchProduct("MOTHER BOARD");
        let cCase = computers[i].searchProduct("CASE");
        section.innerHTML += 
        '<div class="item">' +
            `<ul>
                <li>
                    <img src="${computers[i].getImage()}" alt="" class="templatemo-item">
                </li>
                <li>
                    <h4>${computers[i].getModel()}</h4>
                    <span>${computers[i].getTrademark().getName()} ${computers[i].getModel()}</span>
                </li>
                <li>
                <h4>${processor.getName()}</h4>
                <span>${processor.getTrademark().getName()} ${processor.getModel()} ${processor.getCycles()} Hz</span>
                </li>
                <li>
                    <h4>${ram.getName()}</h4>
                    <span>${ram.getTrademark().getName()} ${ram.getModel()} ${ram.getSize()} GB</span>
                </li>
                <li>
                    <h4>${graphicCard.getName()}</h4>
                    <span>${graphicCard.getTrademark().getName()} ${graphicCard.getModel()} ${graphicCard.getSize()} GB</span>
                </li>
                <li>
                    <h4>${mb.getName()}</h4>
                    <span>${mb.getTrademark().getName()} ${mb.getModel()} ${mb.getGen()}</span>
                </li>
                <li>
                    <h4>${cCase.getName()}</h4>
                    <span>${cCase.getTrademark().getName()} ${cCase.getModel()} ${cCase.getColor()}</span>
                </li>
                <li>
                    <h4>COST</h4>
                    <span>${computers[i].getPrice()}</span>
                </li>
            </ul>
            <div class="main-button" id="${computers[i].getName()}">
                <a id="${computers[i].getCode()}">${isInCart(computers[i])}</a>
            </div>
            <div>
                <p>${computers[i].getDescription()}</p>
            </div>
        </div>`;
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
                cart.addProduct(searchComputer(list,button.id));
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
function searchComputer(array,computerCode){
    for(let i = 0; i < array.length; i++){
        if(array[i].getCode() == computerCode){
            return array[i];
        }
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