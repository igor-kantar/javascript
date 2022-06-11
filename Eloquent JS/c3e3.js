function countBs(s){
    return countChar(s,'B')
}
function countChar(s, c){
    const len  = s.length;

    let counter = 0;
    for(let i=0; i<len; i++){
        if (s[i] == c){
            counter++;
        }
    }
    return counter;
}
const s = "abBcBba"
console.log(countBs(s))