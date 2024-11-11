let array = [];
let n = 4;
let size = parseInt(prompt("Enter the size:"));

for(let i = 0;i < size; i++){
    let input = parseInt(prompt(`Enter ${i+1} of ${size}`));
    array[i] = input + n;
}
console.log(array.join(" "));