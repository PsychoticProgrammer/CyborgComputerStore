
import {Product} from '../Product.js';
export {Case};

class Case extends Product{

    color;

    constructor(color){
        super();
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    serializeProduct(){
        return `
            ${super.serializeProduct()}
            "#color" : "${this.color}"
        }`;
    }
}