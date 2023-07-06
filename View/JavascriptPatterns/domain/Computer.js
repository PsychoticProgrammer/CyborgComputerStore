import {Product} from './Product.js';
export {Computer};

class Computer extends Product{

    #components;

    constructor(){
        super();
        this.#components = [];
    }

    getComponents(){
        return this.#components;
    }

    setComponents(components){
        this.#components = components;
    }

    addComponent(product){
        this.#components.push(
            {
                "name" : product.getName(),
                "product" : product
            }
        );
    }

    removeComponent(productName){
        productName = productName.toUpperCase();
        for(let i = 0; i < this.#components.length; i++){
            if(this.#components[i].name == productName){
                this.#components.splice(i,1);
            }
        }
    }
}