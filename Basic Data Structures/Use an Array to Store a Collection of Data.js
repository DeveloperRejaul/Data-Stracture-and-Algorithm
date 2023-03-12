// Use an Array to Store a Collection of Data example

// example 01 :
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);

// exaple complex array
let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

// ============
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    const myArr = [...arr];
    newArr.push(myArr);
    // Only change code above this line
    num--;
  }

  return newArr;
}

console.log(copyMachine([true, false, true], 2));
