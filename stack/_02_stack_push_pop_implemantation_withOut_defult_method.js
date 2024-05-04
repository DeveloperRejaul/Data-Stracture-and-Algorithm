class CArray {
    constructor () {
        this.length = 0
        this.arr = new Array()
    };

    push(item) {
        this.arr[this.length++] = item
        return this.arr
    }
    pop() {
        --this.length;
        let nArr = [];
       for (let i = 0; i < this.length; i++) {
           nArr[i] = this.arr[i]
       }
       this.arr = nArr;
       return this.arr
    }
}

const arr = new CArray()
console.log(arr.push(1));
console.log(arr.push(2));
console.log(arr.pop());



// method overwrite
Array.prototype.push = function (item){
    console.log(item);
} 

const arr2 = new Array()
arr2.push(2)
console.log(arr2);