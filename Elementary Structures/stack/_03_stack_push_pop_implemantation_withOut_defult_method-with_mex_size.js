class CArray {
    constructor (_mex_size = 0) {
      this.i = 0;
      this.mex_size = _mex_size;
      this.arr = new Array(_mex_size)
    }

    push (item){
        if(this.i < this.mex_size){
            this.arr[this.i++] = item
            return this.arr;
        }

    }

    pop () {
       --this.i;
       let nArr = []
       if(this.i >= 0) {
            for (let j = 0; j < this.i; j++) {
             nArr[j] = this.arr[j]
            }
           return this.arr = nArr;
       }
    }
}


const arr = new CArray(100);

console.log(arr.push(500));
console.log(arr.pop());
