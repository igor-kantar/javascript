// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
//  Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
//  As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

function range(start, end, step){
    let arr = [];

    if (start > end){
        if (step < 0){
            for(let i=start; i>=end; i+=step)
                arr.push(i);
        }else 
            return undefined;
    }
    else if(start < end){
        if (step > 0){
            for(let i=start; i<=end; i+=step)
                arr.push(i)
        }else 
            return undefined
    }else
        return start

    return arr
}

function sum(arr){
    let result = 0;
    if (arr){
        for(let num of arr)
            result += num
        return result
    }
    else
        return undefined
}

console.log(sum(range(2,5,1)))
// -> 14
console.log(sum(range(5,2,-1)))
// -> 14
console.log(sum(range(2,5,-1)))
// -> undefined