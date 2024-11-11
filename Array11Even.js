let size = parseInt(prompt(`Enter the array size:`));
let array = [];
let evenNum = [];

for(let i = 0;i<size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));
// Even num
for(let i = 0;i<size;i++){
    if(array[i] % 2 === 0){
        evenNum.push(array[i]);
    }
}
console.log(`The array even no is`,evenNum.join(" "));