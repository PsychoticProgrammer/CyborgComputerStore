import {Product} from '../Product.js';
export {GraphicCard};

class GraphicCard extends Product{

    #size;

    constructor(size){
        super();
        this.#size = size;
    }

    setSize(size){
        this.#size = size;
    }

    getSize(){
        return this.#size;
    }
}