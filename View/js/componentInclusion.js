import {ComponentConsumer} from './componentConsumer.js';
import {Cart} from '../JavascriptPatterns/composer/Cart.js'

var cart = new Cart();

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
}

/*Método encargado de insertar los productos*/
function addComponentsCards(components,targetSection){
    let section = document.getElementById(targetSection);
    for(let i = 0; i < components.length; i++){
        section.innerHTML += 
        '<div class="col-lg-3 col-sm-6">' +
            '<div class="item">' +
                '<img src="' + components[i].getImage() + '" alt="" height="186px">' +
                '<h4>' + components[i].getModel() + '<br>' +
                    '<span>' + components[i].getTrademark().getName() + '</span>' +
                '</h4>' +
                '<div class="main-button" id="' + components[i].getName().replace(' ','_') + '">' +
                    '<a  id="' + components[i].getCode() + '">Add to Cart</a>' +
                '</div>' +
            '</div>' +
        '</div>';
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
                console.log(cart);
                return;
            }
            button.innerHTML="Add to Cart";
            button.style.backgroundColor = '#e75e8d';
            cart.removeProduct(button.id);
            console.log(cart);
        });
    }
}
/*En caso de que se haya seleccionado previamente alguno de las otras opciones */
function removePreviousSelection(index,elements,cart){
    for(let i = 0; i < elements.length; i++){
        if(i == index){
            continue;
        }
        elements[i].firstChild.innerHTML="Add to Cart";
        elements[i].firstChild.style.backgroundColor = "#e75e8d";
        cart.removeProduct(elements[i].firstChild.id);
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
