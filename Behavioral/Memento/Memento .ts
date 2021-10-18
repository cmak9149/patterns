/**
 * Memento enable stores certains states of applications and then retrieve for later use. 
 * Client programs only deal with the application states, Originator(data wrapper) and
 * CareTaker (storage) and shield the detail Memento. Typical flow goes like these:
 * Client creates both Originator and CareTaker. When it is take to save the state of the 
 * application, pass the application state to Originator to produce a Memento and pass it to 
 * CareTaker directly. When we need to retrieve a particular state (by index for simplicity below), 
 * pass the index to CareTaker to retrieve the Memento and direct it to Originator to unwrap it back 
 * to application state.     
 *   
        * AppState is the state of application that we want to store and then retrieve later. 
        * Memento is a holder for states
        * Orginator is broker to deal with state and hide the detail of Memento
        * CareTaker is the storage for Memento   
 */

// application state 
class AppState {
    index: number | undefined;
    title: string | undefined;
    constructor(i: number, t: string) {
        this.index = i;
        this.title = t;
    }
}

// application state holder
class Memento {
    private state: AppState;
    
    constructor(article: AppState) {
        this.state = article;
    }

    getSaveStates(): AppState {
        return this.state;
    }
}

// Memento wrapper 
class Orginator {
    private state: AppState|null = null;
    set(newArticle: AppState) {

        this.state = newArticle;
    }

    storeMemento(): Memento {
        let m = new Memento(this.state!);
        console.log("Orginator storeMemento", m);
        return m;
    }

    restore(m: Memento) {
        return m.getSaveStates();
    }
}

// Memento storage 
class CareTaker {
    private mementos: Array<Memento> = [];
    addMemento(m: Memento)  {
        console.log("CareTaker.addMemnto", m);
        this.mementos.push(m);
    }
    getMemento(n: number): Memento {
        if(n >= 0 && n < this.mementos.length) {
            return this.mementos[n];
        }
        else {
            throw `Invalid index ${n}. It should be between 0 and ${this.mementos.length} `
        }
    }
}

let index = 1;
// create the Memento wrapper and storage
let ct = new CareTaker();
let og = new Orginator();

// save the state 
og.set(new AppState(index++, "one"));
// get the state wrapper and put to storage
ct.addMemento(og.storeMemento());

// second round
og.set(new AppState(index++, "two"));
ct.addMemento(og.storeMemento());

// third round
og.set(new AppState(index++, "three"));
ct.addMemento(og.storeMemento());

// ct.getMemento to get the Memento back and the pass it to the wrapper to unwrap. 
console.log(og.restore(ct.getMemento(1)));
console.log(og.restore(ct.getMemento(0)));
console.log(og.restore(ct.getMemento(2)));