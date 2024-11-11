function large(array,k){
    array.sort((a,b) => a-b);
    return array[size-k];
}
function small(array,k){
    array.sort((a,b) => a-b);
    return array[k-1];
}

let size = parseInt(prompt(`Enter the size:`));
let array = [];
let k = parseInt(prompt(`Enter the index:`));
for(let i =0; i< size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));
console.log(`the smallest ${k}th element is ${small(array,k)}`);
console.log(`the largest ${k}th element is ${large(array,k)}`);