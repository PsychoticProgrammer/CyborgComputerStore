import {Ram} from './domain/components/Ram.js';
import {GraphicCard} from './domain/components/GraphicCard.js';
import {MotherBoard} from './domain/components/MotherBoard.js';
import {Processor} from './domain/components/Processor.js';
import {ProductBuilder} from './builder/ProductBuilder.js';
import { Computer } from './domain/Computer.js';

var ram = ProductBuilder.create(new Ram(14)).code("15").model("SIUUU").name("RAM").build();
var grap = ProductBuilder.create(new GraphicCard(10)).code("12544").model("GRaph").name("GRAPHIC CARD").build();
var moth = ProductBuilder.create(new MotherBoard("Primera")).code("2587").model("Moth").name("MOTHER BOARD").build();
var proc = ProductBuilder.create(new Processor(3.7)).code("15657").model("proce").name("PROCESSOR").build();

var com = new Computer();
com.addComponent(ram);
com.addComponent(grap);
com.addComponent(moth);
com.addComponent(proc);

console.log(com.getComponents());

//com.removeComponent("Mother board");

console.log(com.getComponents());