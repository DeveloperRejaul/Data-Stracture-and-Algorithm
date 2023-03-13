function popShift(arr) {

  let shifted = arr.shift('is', 'not', 'complete')
  let popped = arr.pop('challenge','is', "not")

  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));