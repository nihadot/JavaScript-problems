let size = parseInt(prompt(`Enter the array size:`));
let array = [];

for(let i = 0;i<size;i++){
    let input = parseInt(prompt(`Enter ${i+1} of ${size}`));
    array[i] = input;
}
console.log(`The array is`, array.join(" "));

array.push(30);
console.log(`The array after insertion`,array.join(" "));