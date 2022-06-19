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
    getLength(){
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
}

v1 = new Vec(1,1)
v2 = new Vec(2,3)

sum = v1.plus(v2)
dif = v1.minus(v2)

console.log(v1.getLength())
// -> 1.4142135623730951
console.log("Sum: "+ sum.x +","+sum.y)
// -> Sum: 3,4
console.log("Sum: "+ dif.x +","+dif.y)
// -> Sum: -1,-2