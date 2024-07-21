// Decrement/Increment Operators(assignment operators contd)

// let x = 10;

// console.log(++x); // 

// console.log(x); // 11

// ++(suffix) ====> slow increment(x++)*only assigns and updates later
// ++(prefix) ====> fast increment(++x)*assigns and updates at once

// --(suffix) ====> slow decrement(x--)*only assigns and updates later
// --(prefix) ====> fast decrement(--x)*assigns and updates at once


// =========================================================
// for loops
// while loops

// Normal(Default for loop)
// Assigment 1 ==> find odds*=(Accept two numbers from user and prints odd numbers within that range )

// Assignment2 ==> multiplication table(Accepts two numbers input and prints multiplication table to 10 up till the next number range)

// Assignment3 ==> Guessing game but with a three trials option

// for(let i = 1;i<=50;i++){
//     console.log(i);
// }

let user = "Qazeem Adeboye"; 

// for(let i = 0;i<=user.length-1;i++){
//     console.log(user.charAt(i));
// }

// let letter = "abcdef";
// let letter2 = "pqrst";

// for(let i = 1; i<= 5; i++){ // 1
//     console.log(i); //1
//     for(let j = 0; j<= letter.length - 1; j++){
//         console.log(letter.charAt(j)); // a
//         for(let k = 0; k<=letter2.length - 1; k++){
//             console.log(letter2.charAt(k)); // pqrst
//         }
//     }
// }

// for(let i = 0;i<=user.length-1;i++){
//     if(user.charAt(i) == "e"){
//         continue; // break
//     }else{
//         console.log(user.charAt(i));
//     }
// }

// for(let i = 0; i<=5; i++){
//     if(i<=2){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }


// for-of

// let names = "My name is Desmond";

// for(let letter of names){
//     console.log(letter);
// }