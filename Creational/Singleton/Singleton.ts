/** 
 * In singleton, only one instance is created at class loading, hidden inside the class.
 * The construction is private to ensure that cannot be called outside.
 * A static method to retrieve the instance. 
*/

class Store {
    static singleton: Store = new Store();
    private constructor() {
        console.log("Store created");
    }

    static getStore(): Store {
        return Store.singleton;
    }

    method(param: string) {
        console.log(`Store method ${param}`);
    } 
}

// store cannot be create outside so the following line will error out  
// let store1 = new Store();
let store = Store.getStore();
store.method("testing");