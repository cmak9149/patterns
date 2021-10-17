interface Visitor {
    execute(obj: B): void        
}  

interface B {
    methodA(): void;
    methodB(): void;
    getKeyProp(): string;
    accept(v: Visitor): void; 
}

class BV1 implements B {
    keyProp: string = "BV1 keys";

    accept(v: Visitor): void {
        v.execute(this);
    }
    getKeyProp(): string {
        return this.keyProp;
    }
    methodA(): void {
        console.log("BV1 methodA");
    }
    methodB(): void {
        console.log("BV1 methodB");
    }
}

class BV2 implements B {
    keyProp: string = "BV1 keys";

    accept(v: Visitor): void {
        v.execute(this);
    }
    getKeyProp(): string {
        return this.keyProp;
    }
    methodA(): void {
        console.log("B2 methodA");
    }
    methodB(): void {
        console.log("B2 methodB");
    }
}

////////////////// here are new methods extends with touching any existing code above
class ExtMethodC implements Visitor {
    execute(obj: B): void {
        console.log("New methodC " + obj.getKeyProp());
    }
} 

class ExtMethodD implements Visitor {
    execute(obj: B): void {
        console.log("New methodD " + obj.getKeyProp());
    }
} 

let bv1 = new BV1();
let bv2 = new BV2();

bv1.methodA();
bv1.methodB();

bv2.methodA();
bv2.methodB();

let extC = new ExtMethodC();
let extD = new ExtMethodD();

bv1.accept(extC);
bv1.accept(extD);
bv2.accept(extC);
bv2.accept(extD);
