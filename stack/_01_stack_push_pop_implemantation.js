
// with function 
function Stack() {
    this.arr = new Array();
}

Stack.prototype.push = function(item) {
    this.arr[this.arr.length++] = item;
    return this.arr
}
Stack.prototype.pop = function(){
  this.arr.length = --this.arr.length;
  return this.arr;
}


const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.pop());


// implement with class
class CStack extends Array {
  constructor () {
    super();
    this.arr = []
  };

  push(item){
    this.arr[this.arr.length] = item
    return this.arr;
  }
  pop(){
    this.arr.length = this.arr.length-1
    return this.arr;
  } 
}

const cstack = new CStack();

console.log(cstack.push(1));  
console.log(cstack.push(2));  
console.log(cstack.pop());  
