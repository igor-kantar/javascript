function reverseArray(arr){
    let newArr = [];
    let len = arr.length;

    for(let i=0; i < len; i++){
        newArr.push(arr.pop());
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    let len = arr.length;
    let start = 0;
    let end = arr.length - 1;
    for( ; start < len/2; start++, end--){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,3,4,5]));