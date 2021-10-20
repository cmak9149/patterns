/** 
 * Chain of responsibilities is a collection of object that perform a task in different ways,
 *  based on some criteria. They are arranged as a linked list. If they can handle the task
 * given, they will perform the task. Or pass to next item configured to take up.
 * 
 *  In the following example, all classes perform calculation of two parameters.  
 */
 class CalculationParams {
     public leftOperand: number;
     public rightOperand: number;
     public operation: string;
     
     constructor(left: number, right: number, opr: string) {
         this.leftOperand = left;
         this.rightOperand = right;
         this.operation = opr;
     }
 }

 interface MathOperator {
    calculate(parms: CalculationParams): number;
 }

 class Adder implements MathOperator {
     private next: MathOperator|undefined;

     constructor(next?: MathOperator) {
        this.next = next;
     }

     calculate(parms: CalculationParams): number {
         if(parms.operation === "+") {
             return parms.leftOperand + parms.rightOperand;
         }
         else if(this.next) {
             return this.next?.calculate(parms);
         }
         else {
             throw "Only add, sub, mult, div operations are valid. Yours is " + parms.operation;
         }
     }
 }

 class Divider implements MathOperator {
    private next: MathOperator|undefined;

    constructor(next?: MathOperator) {
       this.next = next;
    }

    calculate(parms: CalculationParams): number {
        if(parms.operation === "/") {
            return parms.leftOperand / parms.rightOperand;
        }
        else if(this.next) {
            return this.next?.calculate(parms);
        }
        else {
            throw "Only add, sub, mult, div operations are valid. Yours is " + parms.operation;
        }
    }
}

class Subtracter implements MathOperator {
    private next: MathOperator|undefined;

    constructor(next?: MathOperator) {
       this.next = next;
    }

    calculate(parms: CalculationParams): number {
        if(parms.operation === "-") {
            return parms.leftOperand - parms.rightOperand;
        }
        else if(this.next) {
            return this.next?.calculate(parms);
        }
        else {
            throw "Only add, sub, mult, div operations are valid. Yours is " + parms.operation;
        }
    }
}

class Multiplier implements MathOperator {
    private next: MathOperator|undefined;

    constructor(next?: MathOperator) {
       this.next = next;
    }

    calculate(parms: CalculationParams): number {
        if(parms.operation === "*") {
            return parms.leftOperand * parms.rightOperand;
        }
        else if(this.next) {
            return this.next?.calculate(parms);
        }
        else {
            throw "Only add, sub, mult, div operations are valid. Yours is " + parms.operation;
        }
    }
}

let header = new Divider(new Multiplier(new Adder(new Subtracter())) );
let params = new CalculationParams(8, 2, "+");
console.log("8 + 2 =", header.calculate(params));
params.operation = "-";
console.log("8 - 2 =", header.calculate(params));

params.operation = "*";
console.log("8 * 2 =", header.calculate(params));

params.operation = "/";
console.log("8 / 2 =", header.calculate(params));


 