let size = parseInt(prompt(`Enter The size:`));
let array =[];
for(let i =0;i <size;i++){
    array[i] = parseInt(prompt(`Enter ${i+1} of ${size}:`));
}
console.log(`The array is`, array.join(" "));

for(let i = 0;i<size;i++){
    for(let j = 0;j<size-i-1;j++){
        if(array[j]<array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(`The array descending is`, array.join(" "));