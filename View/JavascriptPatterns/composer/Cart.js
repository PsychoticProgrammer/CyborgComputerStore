import { Product } from "../domain/Product.js";
export {Cart}

class Cart{

    products

    constructor(){
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
        return `{
            "name" : "cart",
            "products" : [${serializedProducts}]
        }`;
    }

    getProducts(){
        return this.products;
    }

    setProducts(products){
        this.products = products;
    }

    addProduct(product){
        if(!(product instanceof Product)){
            throw new Error("Only a Product implementation is allowed as a parameter of Cart.addProduct(Product)");
        }
        this.products.push(
            {
                "code" : product.getCode(),
                "product" : product
            }
        );
    }

    removeProduct(productCode){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code == productCode){
                if(this.products.length == 1){
                    this.products = [];
                }
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