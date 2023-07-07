import {Product} from './Product.js';
export {Computer};

class Computer extends Product{

    #products;

    constructor(){
        super();
        this.#products = [];
    }

    getProducts(){
        return this.#products;
    }

    setProducts(components){
        this.#products = components;
    }

    addProduct(product){
        if(!(product instanceof Product)){
            throw new Error("Only a Product implementation is allowed as a parameter of Computer.addProduct(Product)");
        }
        this.#products.push(
            {
                "name" : product.getName(),
                "product" : product
            }
        );
    }

    removeProduct(productCode){
        for(let i = 0; i < this.#products.length; i++){
            if(this.#products[i].getCode() == productCode){
                this.#products.splice(i,1);
            }
        }
    }
}