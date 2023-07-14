import { ProductBuilder } from "./ProductBuilder.js";
import { Product } from "../domain/Product.js";
import { TrademarkConsumer } from "../../js/trademarkConsumer.js";

export {BuilderDirector};

class BuilderDirector{

    static async buildProduct(productInstance,data){
        if(!(productInstance instanceof Product)){
            throw new Error("Only a Product implementation can be passed as parameter in buildProduct(Product)");
        }
        return ProductBuilder.create(productInstance).code(data.code).name(data.name).
            model(data.model).price(data.price).
            description(data.description).image(data.image).
            trademark(await TrademarkConsumer.findTrademark(data.trademarkName)).build();
    }

}