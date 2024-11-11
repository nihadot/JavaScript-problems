let size = parseInt(prompt(`Enter the size`));
let array = [];

for(let i = 0; i < size;i++){
    let input = parseInt(prompt(`Enter ${i + 1} of ${size}`));
    array[i] = input;
}
console.log(array.join(" "));

let index = parseInt(prompt(`Enter the index to remove:`));
array.splice(index,1);

console.log(`The array after removal is`,array.join(" "));

// let size = parseInt(prompt(`Enter the size:`));
// let array = [];

// console.log(`Enter ${size} elements`);
// for(let i = 0; i < size; i++){
//     let input = parseInt(prompt());
//     array[i] = input;
// }
// console.log(`The array is`,array.join(" "));
// array.pop();
// array.shift();
// console.log(`The array after removal is`,array.join(" "));

