let row = parseInt(prompt(`Enter the no.of rows:`));
let col = parseInt(prompt(`Enter the no.of columns:`));
let array =[];

for(let i = 0; i <row;i++){
    array[i] = [];
    for(let j =0 ;j<col;j++){
        array[i][j] = parseInt(prompt(`Enter element of row ${i+1}, column ${j+1}:`));
    }
}
console.log(`The 2D array is:`);
for(let i = 0;i<row;i++){
    console.log(array[i].join(" "));
}