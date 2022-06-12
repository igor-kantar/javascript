function deepEqual(a, b) {
    if (a === b) 
        return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") 
        return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
        return false;
    for (let key of keysA) {
        if (!key in keysB || !deepEqual(a[key], b[key]))
            return false;
    }
    return true;
}


let obj = {one:"one", two:"two"};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {one: 1, one: 2}));
// → false
console.log(deepEqual(obj, {one:"one", two:"two"}));
// → true