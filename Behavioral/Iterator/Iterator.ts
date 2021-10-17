/*
What problems can the Iterator design pattern solve? [2]
    The elements of an aggregate object should be accessed and traversed without exposing its representation (data structures).
    New traversal operations should be defined for an aggregate object without changing its interface.

What solution does the Iterator design pattern describe?
    Define a separate (iterator) object that encapsulates accessing and traversing an aggregate object.
    Clients use an iterator to access and traverse an aggregate without knowing its representation (data structures).

Any object that has next() can be called as iterator. next () return { done: boolean, value: any}
*/
class User {
    uId: string;
    loginTime: Date;
    constructor(id: string) {
        this.uId = id;
        this.loginTime = new Date();
    }
} 

class SnapChatRoom {
    users: Array<User> = [];
    currentIndex: number = -1;
    getUsers = () => {
        this.users.push(new User("cmak"));
        this.users.push(new User("justin"));
        this.users.push(new User("connie"));
        this.users.push(new User("denise"));
        this.currentIndex = 0;
        let self = this;
        return {
            next: () => {
                return { value: self.users[ self.currentIndex ], done: self.currentIndex++ < self.users.length }
            } 
        }
    }
}

let chatRoom = new SnapChatRoom();
let iterator = chatRoom.getUsers();
let userResult = iterator.next(); 
while(userResult.done) {
    console.log("user:", userResult.value);
    userResult = iterator.next(); 
}