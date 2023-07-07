import { Product } from "../domain/Product.js";
export {Cart}

class Cart{

    #products

    constructor(){
        this.#products = [];
    }

    getProducts(){
        return this.#products;
    }

    setProducts(products){
        this.#products = products;
    }

    addProduct(product){
        if(!(product instanceof Product)){
            throw new Error("Only a Product implementation is allowed as a parameter of Cart.addProduct(Product)");
        }
        this.#products.push(
            {
                "code" : product.getCode(),
                "product" : product
            }
        );
    }

    removeProduct(productCode){
        for(let i = 0; i < this.#products.length; i++){
            if(this.#products[i].code == productCode){
                if(this.#products.length == 1){
                    this.#products = [];
                }
                this.#products.splice(i,1);
            }
        }
    }
}