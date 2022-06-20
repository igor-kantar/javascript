// Write a class Vec that represents a vector in two-dimensional space. It takes
// x and y parameters (numbers), which it should save to properties of the same
// name.
//  Give the Vec prototype two methods, plus and minus, that take another
// vector as a parameter and return a new vector that has the sum or difference
// of the two vectors’ (this and the parameter) x and y values.
//  Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    plus(vec){
        return new Vec(this.x+vec.x,this.y+vec.y)
    }
    minus(vec){
        return new Vec(this.x-vec.x,this.y-vec.y)
    }
    length(){
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
}

const v1 = new Vec(1,1)
const v2 = new Vec(2,3)

let sum = v1.plus(v2)
let dif = v1.minus(v2)

console.log(`Len: ${v1.length()}`)
// -> 1.4142135623730951
console.log(`Sum: ${sum.x},${sum.y}`);
// -> Sum: 3,4
console.log(`Dif: ${dif.x},${dif.y}`);
// -> Sum: -1,-2