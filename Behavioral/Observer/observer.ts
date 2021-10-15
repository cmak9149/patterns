interface iSubject {
    register(observer: iObserver): void;
    unregister(observer: iObserver): void;
    notify(detail: any): void;
}

interface iObserver {
    disconnect(): void;
    updated(detail: any): void;
}

class ObserverEventSource implements iSubject  {
    private reading: number = 0;
    private observers: Array<iObserver> = [];

    setReading(n: number) {
        console.log("Number setting to ", n);
        if(this.reading !== n) {
            this.reading = n;
            console.log("Setting changed ", n);
            this.notify(n);
        }
    }

    register(observer: iObserver): void {
        this.observers.push(observer);
    }

    unregister(observer: iObserver): void {
        let observerToDel = this.observers.indexOf(observer);
        if(observerToDel >= 0) {
            this.observers.splice(observerToDel, 1);
            console.log("Observer removed")
        }
        else {
            throw "Observer cannot be found"
        }
    }

    notify(detail: any): void {
        this.observers.forEach((observer: iObserver) => {
            observer.updated(detail);
        });
    }
}

class EventHandler1 implements iObserver {
    private name: string;
    private src: iSubject;
    constructor(name: string, src: iSubject) {
        this.name = name;
        this.src = src;
        this.src.register(this);
    }

    disconnect(): void {
        this.src.unregister(this);
    }

    updated(detail: any): void {
        console.log(`${this.name} handling ${detail} `);
    }
}

class EvenNumberHandler implements iObserver {
    private name: string;
    private src: iSubject;
    constructor(src: iSubject) {
        this.name = "even number handler";
        this.src = src;
        this.src.register(this);
    }

    disconnect(): void {
        this.src.unregister(this);
    }


    updated(detail: number): void {
        console.log("Even number handler called");
        if(detail % 2 === 0) {
            console.log(detail + " is a even number")
        }
    }
}

class OddNumberHandler implements iObserver {
    private name: string;
    private src: iSubject;
    constructor(src: iSubject) {
        this.name = "odd number handler";
        this.src = src;
        this.src.register(this);
    }

    disconnect(): void {
        this.src.unregister(this);
    }

    updated(detail: any): void {
        console.log("Odd number handler called");
        if(detail % 2 === 1) {
            console.log(detail + " is a odd number")
        }
    }
}

let src = new ObserverEventSource();
let hdl = new EventHandler1("heading", src);
let hd2 = new EvenNumberHandler(src);
let hd3 = new OddNumberHandler(src);

src.setReading(50);
src.setReading(50);
src.setReading(11);
src.setReading(22);
hd2.disconnect();
src.setReading(24);