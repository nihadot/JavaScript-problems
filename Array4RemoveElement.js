let array = [];
let size = parseInt(prompt("Enter the array size:"));

for(let i =0;i < size; i++){
    let input = parseInt(prompt(`Enter ${i + 1} of ${size}`));
    array[i] = input;
}

console.log(`The array is`,array.join(" "));

let index = parseInt(prompt(`Enter the index to remove:`));
for(let i = index; i < array.length - 1;i++){
    array[i] = array[i+1];
}
array.length = array.length - 1;
console.log(`The array after removal is`,array.join(" "));