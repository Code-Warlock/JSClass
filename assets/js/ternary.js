// Ternary Operators

// let x = 9;

// // if(x == 9){
// //     console.log(x);
// // }
// // else{
// //     console.log("x is not 9");
// // }

// let result = x == 9 ? x : "x is not 9";
// console.log(result);

let limit = parseInt(prompt("Enter the total amount of numbers : ").trim());
let input = prompt("Enter values(separate by space)").trim();

input = input.split(" ");
let numbers= [];

while(input.length != limit){
    limit = prompt("Enter predefined amount of numbers\nEnter the total amount of numbers : ").trim();
    input = prompt("Enter values(separate by space)").trim();
    input = input.split(" ");
}
for(let num of input){
    numbers.push(parseInt(num))
}

numbers.sort();
let max = 0;
let secondMax = 0;
for(let i = 0; i<= numbers.length; i++){
    let start = numbers[i];
    if(start > max){
        max = start;
    }
}
let index_max = numbers.indexOf(max);
numbers = numbers.splice(index_max-1, 1);
for(let i = 0; i<= numbers.length; i++){
    let start = numbers[i];
    if(start > secondMax){
        secondMax = start;
    }
}
console.log(secondMax);
