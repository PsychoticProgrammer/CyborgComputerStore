import {Product} from "../domain/Product.js";
import {Trademark} from "../trademarks/Trademark.js";
export {ProductBuilder};

class ProductBuilder{

    static #isPrivateInstantiation = false;
    #product;

    constructor(product){
        if(!ProductBuilder.#isPrivateInstantiation){
            throw new Error("Constructor in ProductBuilder is private and cannot be instantiated.");
        }
        this.#product = product;
        ProductBuilder.#isPrivateInstantiation = false;
    }

    static create(product){
        if(!(product instanceof Product)){
            throw new Error("Only a Product implementation is allowed as a parameter of ProductBuilder.create(Product)");
        }
        ProductBuilder.#isPrivateInstantiation = true;
        return new ProductBuilder(product);
    }

    build(){
        return this.#product;
    }

    code(code){
        this.#product.setCode(code);
        return this;
    }

    name(name){
        this.#product.setName(name);
        return this;
    }

    model(model){
        this.#product.setModel(model);
        return this;
    }

    price(price){
        this.#product.setPrice(price);
        return this;
    }

    description(description){
        this.#product.setDescription(description);
        return this;
    }

    image(image){
        this.#product.setImage(image);
        return this;
    }

    trademark(trademark){
        if(!(trademark instanceof Trademark)){
            throw new Error("Only a Trademark implementation is allowed as a parameter of ProductBuilder.trademark(Trademark)");  
        }
        this.#product.setTrademark(trademark);
        return this;
    }
}
