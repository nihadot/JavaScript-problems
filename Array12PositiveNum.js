let size = parseInt(prompt(`Enter the size:`));
let array = [];
let newArray = [];

for(let i = 0; i <size; i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));

for(let i =0;i <size;i++){
    if(array[i] > 0){
        newArray[i] = array[i];
    }
}
console.log(`The new array is`,newArray.join(" "));