const fb = 'FizzBuzz'
const f = 'Fizz'
const b = 'Buzz'

for (let i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} - ${fb}`)
    } else if (i % 5 === 0){
        console.log(`${i} - ${b}`)
    } else if (i % 3 === 0){
        console.log(`${i} - ${f}`)
    } else {
        console.log(i)
    }
}
