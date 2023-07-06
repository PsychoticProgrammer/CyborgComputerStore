import {Product} from '../Product.js';
export {Processor};

class Processor extends Product{

    #cycles;

    constructor(cycles){
        super();
        this.#cycles = cycles;
    }

    setCycles(cycles){
        this.#cycles = cycles;
    }

    getCycles(){
        return this.#cycles;
    }
}