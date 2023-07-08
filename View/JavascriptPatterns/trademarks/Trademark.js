export {Trademark}

class Trademark{

    code;
    name;
    description;

    constructor(code, name, description) {
        if (this.constructor == Trademark) {
          throw new Error("Trademark is Abstract and cannot be instantiated.");
        }
        this.code = code;
        this.name = name;
        this.description = description;
    }

    serializeTrademark(){
        return `{
            "#code" : ${this.code},
            "#name" : "${this.name}",
            "#description" : "${this.description}"
        }`;
    }

    setCode(code){
        this.code = code;
    }

    setName(name){
        this.name = name;
    }

    setDescription(description){
        this.description = description;
    }

    getCode(){
        return this.code;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }
}