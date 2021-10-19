/*

*/
interface Product {

}

class ProductA_1 implements Product {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log(`ProductA_1 ${ name}`);
    }
}

class ProductA_2 implements Product {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log(`ProductA_2 ${ name}`);
    }
}

class ProductB_1 implements Product {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log(`ProductB_1 ${ name}`);
    }
}

class ProductB_2 implements Product {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log(`ProductB_2 ${ name}`);
    }
}

interface iFactory {
    createObject(spec: string, name: string): Product;
}

class ProductAFactory implements iFactory {
    createObject(spec: string, name: string): Product {
        if(spec == "1") {
            return new ProductA_1(name);
        }
        else
            return new ProductA_2(name);
    }

}

class ProductBFactory implements iFactory {
    createObject(spec: string, name: string): Product {

        if(spec == "1") {
            return new ProductB_1(name);
        }
        else
            return new ProductB_2(name);
    }
}

class FactoryAgent {
    private factoryA = new ProductAFactory();
    private factoryB = new ProductBFactory();
    getFactory(type: string): iFactory {
        switch(type) {
            case "A":
                return this.factoryA;
            case "B":
                return this.factoryB;
            default: 
                throw "Unrecognized type " + type;
        }
    } 
}

let agent = new FactoryAgent();
let factoryA = agent.getFactory("A");
let factoryB = agent.getFactory("B");
let prodA1 = factoryA.createObject("1", " creating A 1");
let prodA2 = factoryA.createObject("2", " creating A 2");
let prodB1 = factoryB.createObject("1", " creating B 1");
let prodB2 = factoryB.createObject("2", " creating B 2");