import {Ram} from "../JavascriptPatterns/domain/components/Ram.js";
import {Case} from "../JavascriptPatterns/domain/components/Case.js";
import { MotherBoard } from "../JavascriptPatterns/domain/components/MotherBoard.js";
import { Processor } from "../JavascriptPatterns/domain/components/Processor.js";
import { GraphicCard } from "../JavascriptPatterns/domain/components/GraphicCard.js";
import { BuilderDirector } from "../JavascriptPatterns/builder/BuilderDirector.js";
export {ComponentConsumer};

class ComponentConsumer{

    static #serviceUrl = "http://localhost/PatternsProject/Controller/ProductsRest/";

    static async consumeService(fileName){
        let serverAnswer = await fetch(`${ComponentConsumer.#serviceUrl}${fileName}`);
        let data = await serverAnswer.json();
        return data;
    }

    static getProduct(code,list){
        for(let i = 0; i < list.length; i++){
            if(list[i].getCode() == code){
                return list[i];
            }
        }
        return null;
    }

    static async getRam(){
        let data = await ComponentConsumer.consumeService("ramRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                    await BuilderDirector.buildProduct(new Ram(data[i].size), data[i])
            );
        }
        return products;
    }
    
    static async getCases(){
        let data = await ComponentConsumer.consumeService("caseRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                await BuilderDirector.buildProduct(new Case(data[i].color), data[i])
            );
        }
        return products;
    }
    
    static async getMotherBoards(){
        let data = await ComponentConsumer.consumeService("boardRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                await BuilderDirector.buildProduct(new MotherBoard(data[i].gen), data[i])
                );
        }
        return products;
    }
    
    static async getProcessors(){
        let data = await ComponentConsumer.consumeService("processorRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                await BuilderDirector.buildProduct(new Processor(data[i].cycles), data[i])
            );
        }
        return products;
    }
    
    static async getGraphicCards(){
        let data = await ComponentConsumer.consumeService("graphicRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                await BuilderDirector.buildProduct(new GraphicCard(data[i].size), data[i])
            );
        }
        return products;
    }
}