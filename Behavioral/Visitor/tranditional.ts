interface B_tradiional {
    methodA(): void;
    methodB(): void;
}

class B1 implements B_tradiional {
    methodA(): void {
        console.log("B1 methodA");
    }
    methodB(): void {
        console.log("B1 methodB");
    }

}

class B2 implements B_tradiional {
    methodA(): void {
        console.log("B2 methodA");
    }
    methodB(): void {
        console.log("B2 methodB");
    }

}


// testing code 
let b1 = new B1();
let b2 = new B2();

b1.methodA();
b1.methodB();

b2.methodA();
b2.methodB();

////// above code but have huge problem. When we want to add new method methodC to interface B_tradiional 
////// all classes B1, B2 are impacted, violating open-close principle: open for extensibilty but close for 
//////  modification 