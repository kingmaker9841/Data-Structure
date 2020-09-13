class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        let poppedNode = this.tail;
        if (!this.head){
            return false;
        }else if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            let oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        let oldHead = this.head;
        if (this.length === 0){
            return false;
        }else if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }
    get(index){
        if (index < 0 || index >= this.length){
            return false;
        }
        let compare = Math.floor(index/this.length);
        if (index <= compare){
            let counter = 0;
            let current = this.head;
            while (counter !== index){
                current =current.next;
                counter++;
            }
            return current;
        }else{
            let counter = this.length - 1;
            let current = this.tail;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
            return current;
        }
    }
    set(index, val){
        if (index < 0 || index >= this.length){
            return false;
        }else{
            let current = this.get(index);
            current.val = val;
            return current;
        }
    }
    insert(index, val){
        if (index < 0 || index > this.length){
            return false;
        }else if (index === 0){
            let current = this.unshift(val);
            console.log("Added at the beginning");
            return current;
        }else if (index === this.length){
            let current = this.push(val);
            console.log("Added at the end");
            return current;
        }else {
            let newNode = new Node(val);
            let currentNode = this.get(index);
            let prevNode = currentNode.prev;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = currentNode;
            currentNode.prev = newNode;
            this.length++;
            return newNode;
        }
    }
    remove(index){
        if (index < 0 || index >= this.length){
            return false;
        }else if (index === 0){
            let current = this.shift();
            console.log("Removed from the beginning");
            return current;
        }else if (index === this.length -1){
            let current = this.pop();
            console.log("Removed from the end");
            return current;
        }else {
            let currentNode = this.get(index);
            let prevNode = currentNode.prev;
            let nextNode = currentNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            currentNode.prev = null;
            currentNode.next = null;
            this.length--;
            return this;
        }
    }
}

let double = new DoublyLinkedList();
double.push(5);
double.push(6);
double.push(7);