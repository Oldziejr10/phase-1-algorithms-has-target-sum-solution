// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     for(let j = i +1; j < array.length; j++) { 
//       if (array[j] === complement) return true
//     }
//   }
//   return false 
// }

function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(const number of array)  {
    const complement = target - number; 
    if (seenNumbers[complement]) return true; 
    seenNumbers[number] = true 
  }
  return false; 
}
/*


*/

/* iterate through each number in the array 
  for the current number identify complement that adds to the target(comp = target - num)
  iterate through the rest of the array 
    check if any of number is our complement 
      if so return true 

      if i get to the end of array without returning compl return false 

i*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
