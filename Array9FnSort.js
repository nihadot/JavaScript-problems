let size = parseInt(prompt(`Enter the array size:`));
let array = [];

for(let i =0; i< size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));

array.sort();
console.log(`The array after sorting`,array.join(" "));