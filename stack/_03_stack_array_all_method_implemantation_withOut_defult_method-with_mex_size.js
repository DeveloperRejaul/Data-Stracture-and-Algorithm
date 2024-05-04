class CArray extends Array {
    constructor (_mex_size = 0) {
      super()
      this.i = 0;
      this.mex_size = _mex_size;
      this.arr = new Array(_mex_size)
    }

    push (item){
        if(!item) return this.arr[this.i-1]
        if(this.i < this.mex_size){
            this.arr[this.i] = item
            let pushedItem = this.arr[this.i]
            this.i += 1
            return pushedItem
        }
       
    }

    pop () {
       const popItem = this.arr[--this.i]
       let nArr = new Array(this.mex_size)
       if(this.i >= 0) {
            for (let j = 0; j < this.i; j++) {
              nArr[j] = this.arr[j]
            }
            this.arr = nArr;
       }
       return popItem
    }


    shift () {
        const shiftedItem = this.arr[0];
        const newItem = new Array(this.mex_size);
        for (let j = 0; j < this.i; j++) {
            if(this.arr[j+1]){
                newItem[j] = this.arr[j+1]
            }
        }
        this.i--
        this.arr = newItem;
        return shiftedItem
    };

    unshift (item){
        if(!item) return this.arr[this.i-1]
        const newArray = new Array(this.mex_size)
        newArray[0]= item
        this.i +=1
        for (let j = 0; j < this.i; j++) {
            newArray[j+1] = this.arr[j]
        }
        this.arr = newArray;
        return this.arr[0]
    }

    concat (item) {
        if(!item) return  this.arr;
        const newArray = new Array(this.mex_size);
        for (let j = 0; j < this.i; j++) {
            newArray[j] = this.arr[j];
        } 
        newArray[this.i] = this.isArray(item) ? item[0] :  item
        return newArray
    }
    isArray (item) {
        if(!item) return false
        const str = JSON.stringify(item);
        const r = str.startsWith("[")
        const l = str.endsWith("]")
        if (r && l ) return true
        return false
    };

    forEach (cb) {
        for (let j = 0; j < this.i; j++) {
            cb(this.arr[j], j);
        }
    }

    map (cb) {
        const newArray = new Array(this.mex_size);
        for (let k = 0; k < this.i; k++) {
           let res = cb(this.arr[k], k);
            newArray[k] = res;
        }
        return newArray
    }
    filter (cb) {
        const newArray = new Array(this.mex_size);
        let count = 0;
        for (let k = 0; k < this.i; k++) {
            let res = cb(this.arr[k], k);
            if(res) {
                newArray[count] = this.arr[k];
                count +=1
            }
        }
        return newArray
    };

    find (cb) {
        for (let k = 0; k < this.i; k++) {
            let res = cb(this.arr[k], k)
            if(res) return this.arr[k]
        }
    } 
    findIndex (cb) {
        for (let k = 0; k < this.i; k++) {
            let res = cb(this.arr[k], k)
            if(res) return k
        }
        return -1
    }

    every(cb){
        let res = false ; 
        for (let k = 0; k < this.i; k++) {
             res = cb(this.arr[k], k)
        }
        return res
    }
    some(cb){
        for (let k = 0; k < this.i; k++) {
            let res = cb(this.arr[k], k);
            if(res) return true
        }
        return false
    }

    reduce(cb, val) {
        let result = val !== undefined ? val : this.arr[0];
        const startIdx = val !== undefined ? 0 : 1;
    
        for (let k = startIdx; k < this.i; k++) result = cb(result, this.arr[k]);
        return result;
    }


    
}


const arr = new CArray(100);

arr.push(300)
arr.push(200)
arr.push(200)
arr.push(200)
const res = arr.reduce((a, b)=>{
    // console.log(b);
    return a+b
})
console.log(res);



// const ar = new Array(100);
// ar.unshift(200)
// ar.unshift(100)
// ar.unshift(50)
// ar.unshift(25)
// ar.unshift(15)

// const res = ar.reduce((a, b)=> {
//     // console.log("a: "+ a);
//     console.log("b: "+ b);
// })




