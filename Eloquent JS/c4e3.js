function arrayToList(arr){
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--)
        list = {value: arr[i], rest: list};
  return list;
}

function listToArray(list){
    let arr = [];
    do{
        arr.push(list.value);
        list = list.rest;
    }while(list.rest != null)
    arr.push(list.value)

    return arr;
}

function prepend(elem, list){
    return {value:elem, rest:list};
}

function nth(list, number){
    arr = listToArray(list);
    return arr[number];
}

function recursiveNth(list, number){
    if (number == 0){
        return list.value;
    }else{
        return recursiveNth(list.rest, --number);
    }
}

list = arrayToList([1,2,3]);
console.log("ArrayToList: " + list);
console.log("ListToArray: " + listToArray(list));
console.log("Prepend Zero: "+ listToArray(prepend(0,list)));
console.log("Nth: " + nth(list, 2));
console.log("RecursiveNth: " + recursiveNth(list, 2));