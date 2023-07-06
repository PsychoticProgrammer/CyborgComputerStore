export {ProductBuilder};

class ProductBuilder{

    static #isPrivateInstantiation = false;
    #product;

    constructor(product){
        if(!ProductBuilder.#isPrivateInstantiation){
            throw new Error("Constructor in ProductBuilder is private and cannot be instantiated.");
            return;
        }
        this.#product = product;
        ProductBuilder.#isPrivateInstantiation = false;
    }

    static create(product){
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
        return image;
    }

    trademark(trademark){
        this.#product.setTrademark(trademark);
        return trademark;
    }
}
