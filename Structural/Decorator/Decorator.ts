/*
    Decorator uses isA and hasA dual relationship to provide wrapers 
    with flexible structure. Decorator extends base class, and has a base 
    class instance (passed as parameter in constructor). 
    
    Key benefit:
    1) Flexible 
    2) Dynamic 
 */
class baseClass {
    getNumber(): number {
        throw Error("Must ")
    }
}

class concreteClass1 extends baseClass {
    getNumber(): number {
        return 2;
    }
}

class concreteClass2 extends baseClass {
    getNumber(): number {
        return 3;
    }
}

class decorator extends baseClass {
    public base: baseClass;

    constructor(base: baseClass) {
        super();
        this.base = base;
    }

    getBaseNumber(): number {
        return this.base.getNumber();
    } 

    getNumber(): number {
        return 2 + this.base.getNumber();
    } 
}

class decorator1 extends decorator {
    constructor(base: baseClass) {
        super(base);
        this.base = base;
    }

    getNumber(): number {
        return 0.1 + super.getBaseNumber();
    }
}

class decorator2 extends decorator {
    constructor(base: baseClass) {
        super(base);
        this.base = base;
    }

    getNumber(): number {
        return 0.2 + super.getBaseNumber();
    }
}

let con1 = new concreteClass1();
// method of base class instance,
console.log("Concrete1" + con1.getNumber());

// create the first level of decorator 
let dec1 = new decorator1(con1);

// calling the same method
console.log("Concrete1 Decorder1 " + dec1.getNumber());

// create second level decorator
let dec2 = new decorator2(con1);

// calling the same method of the second level decorator 
console.log("Concrete1 Decorder2 " + dec2.getNumber());

// it can work with a different concrete class, derived from the same base class
let con2 = new concreteClass2();

// calling the method of a different concrete class
console.log("Concrete2" + con1.getNumber());

let dec1a = new decorator1(con2);
console.log("Concrete2 Decorder1 " + dec1a.getNumber());

let dec2a = new decorator2(con2);
console.log("Concrete2 Decorder2 " + dec2a.getNumber());