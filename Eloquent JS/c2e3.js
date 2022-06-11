const width  = 4;
const height = 3;
const size   = width * height;
let row      = "";

for (let i=0 ; i < size; i++){
    row = "";
    for (let j=0; j < width; j++, i++){
        if (i % 2 == 0){
            row += " ";
        }
        else{
            row += "#";
        }
    }
    console.log(row);
}