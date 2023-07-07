import { Trademark } from "../trademarks/Trademark.js";

export {Product};

class Product {

    #code;
    #name;
    #model;
    #price;
    #description;
    #image;
    #trademark;

    constructor() {
      if (this.constructor == Product) {
        throw new Error("Product is Abstract and cannot be instantiated.");
      }
    }
  
    setCode(code){
        this.#code = code;
    }   
  
    setName(name){
        this.#name = name;
    }   
  
    setModel(model){
        this.#model = model;
    }   
  
    setPrice(price){
        this.#price = price;
    }   
  
    setDescription(description){
        this.#description = description;
    }   
  
    setImage(image){
        this.#image = image;
    }   
  
    setTrademark(trademark){
        this.#trademark = trademark;
    }   

    getCode() {
      return this.#code;
    }

    getName() {
      return this.#name;
    }

    getModel() {
      return this.#model;
    }

    getPrice() {
      return this.#price;
    }

    getDescription() {
      return this.#description;
    }

    getImage() {
      return this.#image;
    }

    getTrademark() {
      return this.#trademark;
    }
}