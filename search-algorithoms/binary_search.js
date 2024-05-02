
/**
 * binary search kurar junno obissoy array ta sorted hute hube.
 * stub 01 : we need to sort array
 * stub 02 : maj kan teke split kurte hube
 * stub 03 : then dekbo bame ase naki  dane ace 
 * stub 04 : jodi bame otoba dane take , take abar split kurbo and check kure dekbo 
 *  
 * @param {*} arr
 * @param {*} x 
 */

function solution (arr=[], x) {
    let left=0;
    let right = arr.length -1;
    let mid;
    while ( left <= right) {
        mid = parseInt((left + right)/2);
        if(arr[mid] === x) return mid;
        if(arr[mid] < x) {
            left = mid+1
        }else {
            right = mid-1
        }
    };
    return -1;
}
 
const result = solution([1,2,4,5,6,7,8,9,10], 10);
console.log(result);