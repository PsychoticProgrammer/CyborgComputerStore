import { BuilderDirector } from "../JavascriptPatterns/builder/BuilderDirector.js";
import { Case } from "../JavascriptPatterns/domain/components/Case.js";
import { GraphicCard } from "../JavascriptPatterns/domain/components/GraphicCard.js";
import { MotherBoard } from "../JavascriptPatterns/domain/components/MotherBoard.js";
import { Processor } from "../JavascriptPatterns/domain/components/Processor.js";
import { Ram } from "../JavascriptPatterns/domain/components/Ram.js";
import { Computer } from "../JavascriptPatterns/domain/Computer.js";
import { ComponentConsumer } from "./componentConsumer.js";

export{ComputerConsumer}

class ComputerConsumer{
    
    static async getComputers(){
        let data  = await ComponentConsumer.consumeService("compuRest.php");
        let computers = [];
        for(let i = 0; i < data.length; i++){
            let computer = await BuilderDirector.buildProduct(new Computer(),data[i]);
            for(let j = 0; j < data[i].components.length; j++){
                computer.addProduct(await ComputerConsumer.#filterComponent(data[i].components[j]));
            }
            computers.push(computer);
        }
        return computers;
    }

    static async #filterComponent(data){
        switch(data.name){
            case "RAM":
                return await BuilderDirector.buildProduct(new Ram(data.size),data);
            case "CASE":
                return await BuilderDirector.buildProduct(new Case(data.textProperty),data);
            case "MOTHER BOARD":
                return await  BuilderDirector.buildProduct(new MotherBoard(data.textProperty),data);
            case "GRAPHIC CARD":
                return await  BuilderDirector.buildProduct(new GraphicCard(data.size),data);
            case "PROCESSOR":
                return await  BuilderDirector.buildProduct(new Processor(data.cycles),data);
        }
    }

}