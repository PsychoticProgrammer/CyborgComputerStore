/* Por como está programado el paso de variables entre las diferentes interfaces, se pierde el tipo
de objeto que almacena el carrito, o al menos eso debería pasar, si llega a pasar, entonces hay que usar esta funcion
que lo que hace es castear el objeto comun a uno de un tipo en específico.
ES necesario usarla solo si en consola hay el error por decir, "product.getName() is not defined", o 
"getSize(), getTrademark()" o cualquier propiedad inherente a un objeto de tipo producto, ahí hay que castear con
esta función.
De igual modo, si esto pasa en una computadora que es parte del carrito, hay que hacer un ciclo, que recorra la propiedad
"computer.products" y que por cada componente llame a la función


Eso o acceder directamente a las variables, funciona igual*/

import { Case } from "../JavascriptPatterns/domain/components/Case.js";
import { GraphicCard } from "../JavascriptPatterns/domain/components/GraphicCard.js";
import { MotherBoard } from "../JavascriptPatterns/domain/components/MotherBoard.js";
import { Processor } from "../JavascriptPatterns/domain/components/Processor.js";
import { Ram } from "../JavascriptPatterns/domain/components/Ram.js";
import { Keyboard } from "../JavascriptPatterns/domain/peripherals/Keyboard.js";
import { Mouse } from "../JavascriptPatterns/domain/peripherals/Mouse.js";
import { Screen } from "../JavascriptPatterns/domain/peripherals/Screen.js";
import { Speakers } from "../JavascriptPatterns/domain/peripherals/Speakers.js";
import { Computer } from "../JavascriptPatterns/domain/Computer.js";

function parseComponent(component){
    switch(component.name){
        case "RAM":
            return Object.assign(new Ram(component.size),component);
        case "CASE":
            return Object.assign(new Case(component.color),component);
        case "MOTHER BOARD":
            return Object.assign(new MotherBoard(component.gen),component);
        case "PROCESSOR":
            return Object.assign(new Processor(component.cycles),component);
        case "GRAPHIC CARD":
            return Object.assign(new GraphicCard(component.size),component);
        case "KEYBOARD":
            return Object.assign(new Keyboard(component.type),component);
        case "MOUSE":
            return Object.assign(new Mouse(component.isWireless),component);
        case "SCREEN":
            return Object.assign(new Screen(component.size),component);
        case "SPEAKERS":
            return Object.assign(new Speakers(component.power),component);
        case "COMPUTER":
            return Object.assign(new Computer(),component);
    }
}