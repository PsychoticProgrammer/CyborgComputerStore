import {Product} from '../Product.js';
export {Keyboard};

class Keyboard extends Product{

    type;

    constructor(type){
        super();
        this.type = type;
    }

    setType(type){
        this.type = type;
    }

    getType(){
        return this.type;
    }
}