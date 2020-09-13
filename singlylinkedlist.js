//With Singly Linked List
//Enqueue --> Add at the end of the list
//Dequeue --> Remove from the beginning ofthe list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }
    dequeue(){
        if (!this.first){
            return null;
        }
        let prevNode = this.first;
        this.first = this.first.next;
        prevNode.next = null
        this.size--;
        if (this.size === 0){
            this.last = null;
        }
        return prevNode;
    }
}
let q = new Queue();