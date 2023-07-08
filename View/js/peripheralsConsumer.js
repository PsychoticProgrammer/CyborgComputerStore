import { BuilderDirector } from "../JavascriptPatterns/builder/BuilderDirector.js";
import { ComponentConsumer } from "./componentConsumer.js";
import {Keyboard} from "../JavascriptPatterns/domain/peripherals/Keyboard.js";
import {Mouse} from "../JavascriptPatterns/domain/peripherals/Mouse.js";
import {Speakers} from "../JavascriptPatterns/domain/peripherals/Speakers.js";
import {Screen} from "../JavascriptPatterns/domain/peripherals/Screen.js";
export {PeripheralsConsumer}

class PeripheralsConsumer{

    static async getPeripherals(){
        return [
            await PeripheralsConsumer.#getKeyboards(),
            await PeripheralsConsumer.#getMouse(),
            await PeripheralsConsumer.#getScreen(),
            await PeripheralsConsumer.#getSpeakers()
        ];
    }

    static async #getKeyboards(){
        let data = await ComponentConsumer.consumeService("keyboardRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                    await BuilderDirector.buildProduct(new Keyboard(data[i].type), data[i])
            );
        }
        return products;
    }

    static async #getMouse(){
        let data = await ComponentConsumer.consumeService("mouseRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                    await BuilderDirector.buildProduct(new Mouse(data[i].wireless), data[i])
            );
        }
        return products;
    }

    static async #getScreen(){
        let data = await ComponentConsumer.consumeService("screenRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                    await BuilderDirector.buildProduct(new Screen(data[i].size), data[i])
            );
        }
        return products;
    }
    static async #getSpeakers(){
        let data = await ComponentConsumer.consumeService("speakersRest.php");
        let products = [];
        for(let i = 0; i < data.length; i++){
            products.push(
                    await BuilderDirector.buildProduct(new Speakers(data[i].power), data[i])
            );
        }
        return products;
    }
}