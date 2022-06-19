// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };
//  Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring to the first
// element) or undefined when there is no such element.
//  If you haven’t already, also write a recursive version of nth.

function arrayToList(arr){
    let list = null
    for (let i = arr.length - 1; i >= 0; i--)
        list = {value: arr[i], rest: list}
  return list
}

function listToArray(list){
    let arr = []
    do{
        arr.push(list.value)
        list = list.rest
    }while(list.rest != null)
    arr.push(list.value)

    return arr
}

const prepend = (elem, list) => Object({value:elem, rest:list})

function nth(list, number){
    arr = listToArray(list)
    return arr[number]
}

function recursiveNth(list, number){
    if (number == 0){
        return list.value
    }else
        return recursiveNth(list.rest, --number);
}

list = arrayToList([1,2,3])

console.log("ArrayToList: "+ `{value: ${list.value}, rest: { value: ${list.rest.value}, rest: { value: ${list.rest.rest.value}, rest: ${list.rest.rest.rest}}}}`)
// -> ArrayToList: {value: 1, rest: { value: 2, rest: { value: 3, rest: null}}}
console.log("ListToArray: " + listToArray(list))
// -> ListToArray: 1,2,3
console.log("Prepend Zero: "+ listToArray(prepend(0,list)))
// -> Prepend Zero: 0,1,2,3
console.log("Nth: " + nth(list, 2))
// -> Nth: 3
console.log("RecursiveNth: " + recursiveNth(list, 2))
// -> RecursiveNth: 3