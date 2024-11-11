function sort(array,k){
    for(let i = 0;i< size;i++){
        for(j=0;j<size-i-1;j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
function large(array,k){
    sort(array);
    return array[size-k];
    
}
function small(array,k){
    sort(array);
    return array[k-1];
   
}
let size = parseInt(prompt(`Enter the size:`));
let array = [];
let k = parseInt(prompt(`Enter the index:`));
for(let i =0; i< size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`,array.join(" "));
console.log(`the largest ${k}th element is ${large(array,k)}`);
console.log(`the smallest ${k}th element is ${small(array,k)}`);
