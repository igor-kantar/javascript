// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is
// like the && operator.
//  Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method.

function every(arr, testf) {
    for (const elem of arr) {
        if (!testf(elem))
            return false
    }
    return true
}

// de morgans theorem
const everySome = (arr, testf) => !arr.some(elem => !testf(elem))

const testf = (num) => num % 2 == 0

console.log(every([2,4,6,8],testf))
// -> true
console.log(every([2,4,6,7],testf))
// -> false
console.log(everySome([2,4,6,8],testf))
// -> true
console.log(everySome([2,4,6,7],testf))
// -> false