class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if (!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if (value === current.value) return undefined;
            if (value < current.value){
                if (current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if (current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value){
        if (!this.root) return undefined;
        let current = this.root;
        while(true){
            if (value === current.value) return current;
            if (value < current.value){
                if (!current.left) return undefined;
                current = current.left;
            }else{
                if (!current.right) return undefined;
                current = current.right;
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(15);
tree.insert(10);
tree.insert(9);
tree.insert(18);
tree.insert(16);
tree.insert(19);
tree.insert(3);
