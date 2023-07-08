import {Product} from '../Product.js';
export {Mouse};

class Mouse extends Product{

    isWireless;

    constructor(isWireless){
        super();
        this.isWireless = isWireless;
    }

    setIsWireless(isWireless){
        this.isWireless = isWireless;
    }

    getIsWireless(){
        return this.isWireless;
    }
}