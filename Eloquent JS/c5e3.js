function every(arr, testf) {
    for (const elem of arr) {
        if (!testf(elem))
            return false
    }
    return true
}

function testf(num) {
    if(num % 2 == 0)
        return true
    return false
}

console.log(every([2,4,6,8],testf))
// -> true
console.log(every([2,4,6,7],testf))
// -> false