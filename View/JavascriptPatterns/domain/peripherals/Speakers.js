import {Product} from '../Product.js';
export {Speakers};

class Speakers extends Product{

    power;

    constructor(power){
        super();
        this.power = power;
    }

    setPower(power){
        this.power = power;
    }

    getPower(){
        return this.power;
    }
}