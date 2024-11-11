let size = parseInt(prompt("Enter the array size:"));
let array = [];
let sum = 0;

for(let i =0;i < size ;i++){
    let input = parseInt(prompt(`Enter ${i+1} of ${size}`));
    array[i] = input;
    sum += input;
}
console.log(`The array is\n`,array.join(" "));
console.log(`Tha sum is ${sum}`);