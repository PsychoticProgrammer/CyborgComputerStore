import {Ram} from './domain/components/Ram.js';
import {GraphicCard} from './domain/components/GraphicCard.js';
import {MotherBoard} from './domain/components/MotherBoard.js';
import {Processor} from './domain/components/Processor.js';
import {ProductBuilder} from './builder/ProductBuilder.js';
import { Computer } from './domain/Computer.js';
import {Cart} from './composer/Cart.js';
import { AMD } from './trademarks/AMD.js';
import { Asus } from './trademarks/Asus.js';
import { Dell } from './trademarks/Dell.js';
import { Intel } from './trademarks/Intel.js';
import { Nvidia } from './trademarks/Nvidia.js';

var ram = ProductBuilder.create(new Ram(14)).code("15").model("SIUUU").name("RAM").build();
var grap = ProductBuilder.create(new GraphicCard(10)).code("12544").model("GRaph").name("GRAPHIC CARD").build();
var moth = ProductBuilder.create(new MotherBoard("Primera")).code("2587").model("Moth").name("MOTHER BOARD").build();
var proc = ProductBuilder.create(new Processor(3.7)).code("15657").model("proce").name("PROCESSOR").build();

var com = new Computer();
com.addProduct(ram);
com.addProduct(grap);
com.addProduct(moth);
com.addProduct(proc);

var cart = new Cart();
cart.addProduct(com);
cart.addProduct(ram);
cart.addProduct(moth);
cart.addProduct(proc);

console.log(cart);

var amd = new AMD(14,"asdadsad");
var nvidia = new Nvidia(21,"asdadsad");
var intel = new Intel(13,"asdadsad");
var dell = new Dell(87,"asdadsad");
var asus = new Asus(87,"asdadsad");

console.log(amd);
console.log(nvidia);
console.log(intel);
console.log(dell);
console.log(asus);

// var http = new XMLHttpRequest();
// http.open("GET","http://localhost");
//     http.send();
//     http.onreadystatechange = function(){
//         if(http.readyState == 4 && http.status == 200){
//             let data = JSON.parse(http.responseText);
//             let newRow;
//             for(let i = 0; i < data.length; i++){
//                 newRow = createNewRow(tableBody);
//                 createNewCell(newRow,'cedula',data[i].CEDULA);
//                 createNewCell(newRow,'nombre',data[i].NOMBRE);
//                 createNewCell(newRow,'apellido',data[i].APELLIDO);
//                 createNewCell(newRow,'edad',data[i].EDAD);
//                 let cell = newRow.insertCell();
//                 cell.innerHTML = 
//                 '<input type="button" value="Modificar" class="btnModify" id="btnModify">' +
//                 '<input type="button" value="Eliminar" class="btnDelete" id="btnDelete">';
//                 cell.setAttribute('class','buttonsCell');
//             }
//         }
//     }
