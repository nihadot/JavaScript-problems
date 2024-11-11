// let var1 ="Hello JavaScript";
// let var2 = 86994;
// let aNum;
// console.log(var1);
// console.log(var2);
// console.log(aNum);
// let num1 = 20;
// let num2 = 30;
// let res = num1 + num2;
// let result = document.querySelector(".h1");
// result.innerText = `The result is ${res}`;
// document.querySelector(".h1").innerText = `The result is ${res}`;
// console.log(`The result is ${res}`);
// arr1[1] = "value4";
// console.log(arr1[0]);
// console.log(arr1);

let cars = ["BMW","AUDI","BENZ","KIA"];

// let allLi = document.querySelectorAll("li");
// allLi[0].innerText = cars[0];
// allLi[1].innerText = cars[1];
// allLi[2].innerText = cars[2];
// allLi[3].innerText = cars[3];
// allLi[4].innerText = cars[4] ="NEXA";
document.querySelector("h4").innerText = cars;
// console.log(allLi);

let carItems = document.getElementById('unOrdered');
// Method 1
// for(let car of cars){
//     let carlist = document.createElement("li");
//     carlist.innerText = car;
//     console.log(carlist);
//     carItems.appendChild(carlist);
// }

// Method 2

cars.forEach(function(car,index){
    console.log(car);
    let list = document.createElement('li');
    list.innerText = `${index} ${car}`;
    carItems.appendChild(list);
})

// let FruitItems = ["apple", "orange","berry"];
// let Items = document.getElementById('fruitslist');

// for(let fruit of FruitItems){
//     let list = document.createElement('li');
//     list.innerHTML = fruit;
//     Items.appendChild(list);
// }

// FruitItems.forEach(function(fruit){
//     let list = document.createElement("li");
//     list.innerHTML = fruit;
//     Items.appendChild(list);
//     console.log(fruit);
// })

// Push

// let colorList = document.querySelectorAll('li');
// console.log(colorList);
// let newColor = [];
// colorList.forEach(function(colorli){
//     let colorItem = colorli.innerText;
//     newColor.push(colorItem);
// });
// console.log(newColor);

let colors = document.querySelectorAll('li');
let newArray = [];
for(let col of colors){
    console.log(col);
    let coloritem = col.innerText;
    newArray.push(coloritem);
}
console.log(newArray);
// newArray.shift();
// console.log(newArray);

// newArray.pop();
// console.log(newArray);
newArray.unshift("violet","yellow");
console.log(newArray);

// let array = document.querySelectorAll('li');
// for(let new1 of array){
//     let new2 = new1.innerText;
//     array.unshift("violet","yellow");
// }














