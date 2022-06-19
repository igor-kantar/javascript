// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.

function reverseArray(arr){
    let newArr = []
    let len = arr.length

    for(let i=0; i < len; i++)
        newArr.push(arr.pop());
    return newArr
}

function reverseArrayInPlace(arr){
    let start = 0
    let end = arr.length - 1
    for(; start < arr.length/2; start++, end--){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5]));
// -> 5,4,3,2,1
console.log(reverseArrayInPlace([1,2,3,4,5]));
// -> 5,4,3,2,1