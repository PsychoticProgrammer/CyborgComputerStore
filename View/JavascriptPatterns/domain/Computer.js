import {Product} from './Product.js';
export {Computer};

class Computer extends Product{

    products;

    constructor(){
        super();
        this.products = [];
    }

    serializeProduct(){
        let serializedProducts = "";
        for(let i = 0; i < this.products.length; i++){
            serializedProducts += this.products[i].product.serializeProduct();
            if(i != this.products.length-1){
                serializedProducts += ',';
            }
        }
        return `
            ${super.serializeProduct()}
            "#products" : [${serializedProducts}]
        }`;
    }

    getProducts(){
        return this.products;
    }

    setProducts(components){
        this.products = components;
    }

    addProduct(product){
        if(!(product instanceof Product)){
            throw new Error("Only a Product implementation is allowed as a parameter of Computer.addProduct(Product)");
        }
        this.products.push(
            {
                "name" : product.getName(),
                "product" : product
            }
        );
    }

    removeProduct(productCode){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].getCode() == productCode){
                this.products.splice(i,1);
            }
        }
    }

    /*Busca el componente en el grupo de productos de la computadora */
    searchProduct(component){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].name == component){
                return this.products[i].product;
            }
        }
    }
}