// Finding odds


let num1 = parseInt(prompt("Enter the start range of the numbers"));
let num2 = parseInt(prompt("Enter the limit of the numbers"));

for( ; num1 <= num2; num1++){
    if(num1 % 2 != 0){
        console.log(num1);
    }
}