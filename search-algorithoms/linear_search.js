/**
 * linear search holo ekta ekta kure check kurbe 
 */
function solution  (arr=[], x) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == x)return i;
    };
    return -1;
};

const result = solution([60, 1,88,10,11,100], 8);
console.log(result); // time complexity: O(N), space complexity: O(1)