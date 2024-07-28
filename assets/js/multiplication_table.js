// Multiplication Table

let num1 = parseInt(prompt("Enter the start range of the table"));
let num2 = parseInt(prompt("Enter the limit of the table"));

let multMax = 12;

for(num1 ; num1 <= num2; num1++){

    for(let i = 1; i <= multMax; i++){
        console.log(num1 + "x" + i + "=" + (num1*i));

    }
    console.log("================================================================================================");
}