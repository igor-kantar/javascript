const fb = "FizzBuzz";
const f  = "Fizz";
const b  = "Buzz";

for (let i=1; i<101; i++){
    if (i % 5 == 0){
        if (i % 3 == 0){
            console.log(fb)
        }
        else{
        console.log(b)
        }
    }
    else if (i % 3 == 0){
        console.log(f)
    }
    else{
        console.log(i)
    }
}