import {Product} from '../Product.js';
export {MotherBoard};

class MotherBoard extends Product{

    gen;

    constructor(gen){
        super();
        this.gen = gen;
    }

    setGen(gen){
        this.gen = gen;
    }

    getGen(){
        return this.gen;
    }

    serializeProduct(){
        return `
            ${super.serializeProduct()}
            "#gen" : "${this.gen}"
        }`;
    }
}