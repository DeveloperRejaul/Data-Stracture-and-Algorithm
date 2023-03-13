function quickCheck(arr, elem) {
  // Only change code below this line
 

const result = arr.indexOf(elem)

if(result === -1 ){
  return false
}else{
  return true
}

  // Only change code above this line
}

console.log(quickCheck([true, false, false], undefined));