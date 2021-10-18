/**
 * refers to an object that minimizes memory usage by sharing some of its data with other similar objects. 

    store intrinsic state that is invariant, context-independent and shareable (for example, the code of character 'A' in a given character set)
    provide an interface for passing in extrinsic state that is variant, context-dependent and can't be shared (for example, the position of character 'A' in a text document)

    Use case: 
    CompositeObject has a property fragment that are large, and has several different variations, depends on key property 1, and 2
    So, it is pulled out to form "Flyweight" 
    to be shared.  
 * 
*/

class FlyweightKeyProperty {
    prop1: string;
    prop2: number;
    constructor(prop1: string, prop2: number) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }

    getHash(): string {
        return this.prop1 + "_" + this.prop2;
    }
}

class Flyweight {
    private prop: FlyweightKeyProperty;
    private hugeObject: any;

    constructor(intrincObjKey: FlyweightKeyProperty) {
        this.prop = intrincObjKey;
        this.hugeObject = {};
        console.log(`Creating ${intrincObjKey.prop1} and ${intrincObjKey.prop2}`);
    }
}   

class FlyweightFactory {
    private static lookup: {[key: string]: Flyweight} = {};
    
    static getFlyweight(intrincObjKey: FlyweightKeyProperty): Flyweight {
        let key = intrincObjKey.getHash();
        let flyweight = FlyweightFactory.lookup[key];

        if(!flyweight) {
            flyweight = new Flyweight(intrincObjKey);
            FlyweightFactory.lookup[key] = flyweight;
        }

        return flyweight;
    }
}

class CompositeObject {
    private flyweight: Flyweight;
    private extrinsicProp1: string;
    private extrinsicProp2: string;
    private extrinsicProp3: number;
    
    constructor(prop1: string, prop2: number, prop3: string, prop4: string, prop5: number) {
        this.flyweight = FlyweightFactory.getFlyweight(new FlyweightKeyProperty(prop1, prop2));
        this.extrinsicProp1 = prop3;
        this.extrinsicProp2 = prop4;
        this.extrinsicProp3 = prop5;
    }
}

let compObj1 = new CompositeObject("red", 1, "extrinsic prop 1", "extrinsic prop 2", 1);
let compObj2 = new CompositeObject("red", 1, "extrinsic prop 1A", "extrinsic prop 2-3", 21); 
let compObj3 = new CompositeObject("blue", 2, "extrinsic prop 1B", "extrinsic prop 2-4", 23); 
let compObj4 = new CompositeObject("red", 2, "extrinsic prop 1B", "extrinsic prop 2-5", 23); 