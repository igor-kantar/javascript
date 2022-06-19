// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

const min = (a, b) =>  a < b ? a : b

console.log(min(12,24))
// -> 12
console.log(min(12,6))
// -> 6