import { Asus } from "../JavascriptPatterns/trademarks/Asus.js";
import { Dell } from "../JavascriptPatterns/trademarks/Dell.js";
import { Nvidia } from "../JavascriptPatterns/trademarks/Nvidia.js";
import { AMD } from "../JavascriptPatterns/trademarks/AMD.js";
import { Intel } from "../JavascriptPatterns/trademarks/Intel.js";
export {TrademarkConsumer};

class TrademarkConsumer{
    
    static #usedTrademarks;
    static #serviceUrl = "http://localhost/PatternsProject/Controller/";

    static async #consumeService(fileName){
        let serverAnswer = await fetch(`${TrademarkConsumer.#serviceUrl}${fileName}`);
        let data = await serverAnswer.json();
        return data;
    }

    static async #getTrademarks(){
        let data = await TrademarkConsumer.#consumeService("trademarkRest.php");
        for(let i = 0; i < data.length; i++){
            switch(data[i].name){
                case "Asus":
                    TrademarkConsumer.#usedTrademarks.push(new Asus(data[i].code,data[i].description));
                    break;
                case "Dell":
                    TrademarkConsumer.#usedTrademarks.push(new Dell(data[i].code,data[i].description));
                    break;
                case "Nvidia":
                    TrademarkConsumer.#usedTrademarks.push(new Nvidia(data[i].code,data[i].description));
                    break;
                case "AMD":
                    TrademarkConsumer.#usedTrademarks.push(new AMD(data[i].code,data[i].description));
                    break;
                case "Intel":
                    TrademarkConsumer.#usedTrademarks.push(new Intel(data[i].code,data[i].description));
                    break;
            }
        }
    }
    
    /*Evaluar si amerita usar un prototype*/
    static async findTrademark(trademarkName){

        if(TrademarkConsumer.#usedTrademarks == null){
            TrademarkConsumer.#usedTrademarks = [];
            await TrademarkConsumer.#getTrademarks();
        }

        for(let i = 0; i < TrademarkConsumer.#usedTrademarks.length; i++){
            if(TrademarkConsumer.#usedTrademarks[i].getName() == trademarkName){
                return TrademarkConsumer.#usedTrademarks[i];
            }
        }
        return null;
    }
}