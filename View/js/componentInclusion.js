import { Case } from "../JavascriptPatterns/domain/components/Case.js";
import { GraphicCard } from "../JavascriptPatterns/domain/components/GraphicCard.js";
import { MotherBoard } from "../JavascriptPatterns/domain/components/MotherBoard.js";
import { Processor } from "../JavascriptPatterns/domain/components/Processor.js";
import { Ram } from "../JavascriptPatterns/domain/components/Ram.js";
import {ComponentConsumer} from './componentConsumer.js';
import {Cart} from '../JavascriptPatterns/composer/Cart.js'

var globalCart = JSON.parse(localStorage.getItem("cart"));
/* CONVIERTE UN OBJETO GENÉRICO A UNA CLASE EN ESPECÍFICO */
var cart = Object.assign(new Cart(),globalCart);
console.log(cart);

window.onload = async function(){
    let cases = await ComponentConsumer.getCases();
    let processors = await ComponentConsumer.getProcessors();
    let graphicCards = await ComponentConsumer.getGraphicCards();
    let motherBoards = await ComponentConsumer.getMotherBoards();
    let ram = await ComponentConsumer.getRam();
    
    addComponentsCards(cases,"caseSlider");
    addComponentsCards(processors,"processorSlider");
    addComponentsCards(graphicCards,"graphicSlider");
    addComponentsCards(motherBoards,"boardSlider");
    addComponentsCards(ram,"ramSlider");

    addListenersToComponent("CASE",cases);
    addListenersToComponent("PROCESSOR",processors);
    addListenersToComponent("GRAPHIC_CARD",graphicCards);
    addListenersToComponent("MOTHER_BOARD",motherBoards);
    addListenersToComponent("RAM",ram);

    setInCartColors();
}

/*Método encargado de insertar los productos*/
function addComponentsCards(components,targetSection){
    let section = document.getElementById(targetSection);
    for(let i = 0; i < components.length; i++){
        section.innerHTML += 
        `<div class="col-lg-3 col-sm-6">
            <div class="item">
                <img src="${components[i].getImage()}" alt="" height="186px">
                <h4>${components[i].getTrademark().getName()}<br>
                    <span>${components[i].getModel()}</span>
                    <span>${uniqueChar(components[i])}</span>
                </h4>
                <span>${components[i].getPrice()}</span>
                <br>
                <span>${components[i].getDescription()}</span>
                <br>
                <div class="main-button" id="${components[i].getName().replace(' ','_')}">
                    <a  id="${components[i].getCode()}">${isInCart(components[i])}</a>
                </div>
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
                button.innerHTML = "Remove from Cart";
                cart.addProduct(searchProduct(list,button.id));
                removePreviousSelection(i,buttonSections,cart);
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
/*En caso de que se haya seleccionado previamente alguno de las otras opciones */
function removePreviousSelection(index,elements,cart){
    for(let i = 0; i < elements.length; i++){
        if(i == index){
            continue;
        }
        elements[i].childNodes[1].innerHTML="Add to Cart";
        elements[i].childNodes[1].style.backgroundColor = "#e75e8d";
        cart.removeProduct(elements[i].childNodes[1].id);
    }
}

/*Busca el producto (instancia) en el grupo de datos contextual */
function searchProduct(array, code){
    for(let i = 0; i < array.length; i++){
        if(array[i].getCode() == code){
            return array[i];
        }
    }
}

function uniqueChar(component){
    switch(component.getName()){
        case "CASE":
            return component.getColor();
        case "MOTHER BOARD":
            return component.getGen();
        case "PROCESSOR":
            return component.getCycles() + " Hz";
        case "GRAPHIC CARD":
            return component.getSize() + " GB";
        case "RAM":
            return component.getSize() + " GB";
    }
}

/* En caso de que ya se haya seleccionado, se marca como presente en el carrito, evitando inconsistencias */
function isInCart(component){
    let cartProducts = cart.getProducts();
    for(let i = 0; i < cartProducts.length; i++){
        if(component.getCode() == cartProducts[i].product.code){
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
