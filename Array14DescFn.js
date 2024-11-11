let size = parseInt(prompt(`Enter the size:`));
let array = [];
for(let i = 0; i < size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`the array is`,array.join(" "));

array.sort((a,b) => b-a);
console.log(`the descending array is`,array.join(" "));