let size = parseInt(prompt(`Enter tha array size:`));
let array = [];

for(let i=0;i<size;i++){
    array[i] = parseInt(prompt(`enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));

//Odd numbers
for(let i =0;i<size;i++){
    if(array[i] % 2 !== 0 ){
        let oddNum = [].push(array[i]);
    }
}
console.log(oddNum.join(" "));