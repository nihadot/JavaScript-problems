let size = parseInt(prompt(`enter the array size:`));
array = [];

for(let i = 0;i < size; i++){
    let input = parseInt(prompt(`Enter ${i+1} of ${size}`));
    array[i] = input;
}
console.log(`The array is`,array.join(" "));

let index = parseInt(prompt(`Enter the index to add:`));
let element = parseInt(prompt(`Enter the element to add:`));

for(let i = array.length; i > index;i--){
    array[i] = array[i-1];
}
array[index] = element;
console.log(`The array after insertion is`,array.join(" "));