

// let msg = confirm("Welcome to my guessing game \n Do you want to continue");
// if (msg == true) {
//   // Main program starts here ...
//   let computer_num = Math.ceil(Math.random() * 3);
//   let user_num = parseInt(prompt("Guess a number!"));
//   let trials = 3;
//   while (true) {
//     if (user_num == computer_num) {
//       alert("Correct!\nYou have gotten it right");
//       break;
//     } else {
//       if (trials > 1) {
//         alert("Incorrect the correct number was " + computer_num);
//         user_num = parseInt(prompt("Try again"));
//       } else {
//         alert("You have used up your trials!");
//         break;
//       }
//     }
//     trials--;
//   }
// } else {
//   alert("😢...You have exited my game :( ");
// }


let msg = confirm("Welcome to my guessing game \n Do you want to continue");
if (msg == true) {
  // Main program starts here ...
  let computer_num = Math.ceil(Math.random() * 3);
  let user_num = parseInt(prompt("Guess a number!"));
  let trials = 3;
  do{
    if (user_num == computer_num) {
      alert("Correct!\nYou have gotten it right");
      break;
    }
    alert("Incorrect the correct number was " + computer_num);
    user_num = parseInt(prompt("Try again"));
    if(trials <= 1){
      alert("You have used up your trials!");
      break;
    }
    trials--;
  }
  while (true)
} else {
  alert("😢...You have exited my game :( ");
}
