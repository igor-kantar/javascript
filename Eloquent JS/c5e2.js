function loop(val, testf, updatef, bodyf){
    for(let i=val; testf(i); updatef(i))
        bodyf(i)
}