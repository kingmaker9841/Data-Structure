//Stack with Singly Linked List and pushing and popping from the beginning

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let prevNode = this.first;
            this.first = newNode;
            newNode.next = prevNode;    
        }
        this.size++;
        return this.size;
    }
    pop(){
        let prevNode = this.first;
        if (!this.first){
            return null;
        }else{
            this.first = prevNode.next;
            prevNode.next = null;
        }
        this.size--;
        if (this.size === 0){
            this.last = null;
        }
        return prevNode;
    }
}


let stack = new Stack();