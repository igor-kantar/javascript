let arr = [[0,1,2],[3,4,5],[6,7,8]]

function flatten(arr1, arr2){
    let flatArr = arr1.concat(arr2)
    return flatArr

}
console.log(arr.reduce(flatten))
// -> [0,1,2,3,4,5,6,7,8]