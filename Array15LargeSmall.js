let size = parseInt(prompt(`Enter the size:`));
let array = [];
for(let i =0; i< size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));

//descending
array.sort((a,b) => b-a);
console.log(`The lowest element is ${array[size-1]}`);
console.log(`The largest element is ${array[0]}`);
