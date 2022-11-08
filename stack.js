// data is stored in a single directional way and the time complexity is constant
class Stack {
    // create class constructor
    constructor() {
        this.collections = []; // define the array
    }

    // create the push method
    push(element) {
        this.collections.push(element); // adds element to the stack
    }

    // create a pop method
    pop() {
        this.collections.pop();// removes first element in stack
    }

    // create the peek method to view the top element at the stack
    peek() {
        return this.collections[this.collections.length - 1];
    }

    // create the size method to return the size of the stack
    size() {
        return this.collections.length;
    }

    // create the print method to return all elements in the stack
    print() {
        return this.collections.toString();
    }

    // create isEmpty method to check if stack is empty
    isEmpty() {
        return this.collections.length === 0;
    }
}

// create an instance of the class Stack
const plateStack = new Stack();
console.info(plateStack.isEmpty());

// add method
plateStack.push(4);
plateStack.push(9);
plateStack.push("Chidalu");

console.info(plateStack.print())

// pop method
plateStack.pop();

console.info(plateStack.print())

// size of stack
console.info(plateStack.size());

// top element in the stack ds
console.info(plateStack.peek())