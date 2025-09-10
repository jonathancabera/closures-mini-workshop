/*
Prompt:
Write a function `addByX` that takes in a number `x` and returns a new function.
The returned function should take in a number and add `x` to it.

Example:
const addByTwo = addByX(2);
addByTwo(3); // 5
addByTwo(10); // 12
*/

function addByX(num) {
  //Create a new function to be returned by addByX.
  //Our function should return the input of the function + x.
  function addNumberToX(x){
    return num + x; //Returns the result of num + x to the function;
  }
  return addNumberToX; //Returns the value of our addNumberToX function.
}


/*
Minimal Examples (visible for this review problem)
Uncomment to try them locally.
*/
const addByTwo = addByX(2);
console.log(addByTwo(3));   // -> 5
console.log(addByTwo(10));  // -> 12

// TODO: Add ONE additional example call of your own below
// e.g., const addByFive = addByX(5); console.log(addByFive(7)); // -> 12
