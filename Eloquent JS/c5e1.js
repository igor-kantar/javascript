// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the original
// arrays.

let arr = [[0,1,2],[3,4,5],[6,7,8]]

console.log(arr.reduce(((arr1, arr2) => arr1.concat(arr2))))
// -> [0,1,2,3,4,5,6,7,8]