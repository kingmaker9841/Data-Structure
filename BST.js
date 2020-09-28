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
        BFS(){
        let node = this.root;
        let queue = [];
        let visited = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;
    }
    DFSpreorder(){
        let visited = [];
        function traverse(node){
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    DFSpostorder(){
        let visited = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(this.root);
        return visited;
    }
        DFSinorder(){
        let visited = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
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
