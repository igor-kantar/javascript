function range(start, end, step){
    let arr = [];

    if (start > end){
        if (step < 0){
            for(let i=start; i>=end; i+=step){
                arr.push(i);
            }
        }else { 
            return undefined;
        }
    }
    else if(start < end){
        if (step > 0){
            for(let i=start; i<=end; i+=step){
                arr.push(i);
            }
        }else { 
            return undefined;
        }
    }else{
        return start;
    }
    return arr;
}

function sum(arr){
    let result = 0;
    for(let num of arr){
        result += num;
    }
    return result;
}

console.log(sum(range(5,2,-1)))