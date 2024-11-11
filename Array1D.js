let array = [];
let size = parseInt(prompt("Enter the array size:"));
let i = 0;

for(i = 0; i < size; i++){
    let input = parseInt(prompt(`Enter the ${i+1} of ${size} element`));
    array[i] = input;
}

console.log(array.join(" "));