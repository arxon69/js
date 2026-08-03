// let a = 10;
// let b = 3;
// console.log(a + b); 
// console.log(a-b);




// console.log("sum of 10 and 20 is " + a + b);//this will be concated 


// console.log(a+b+"sum of 10 and 20");


// console.log("1"-1);

// let age = prompt("enter your age");
// age = Number(age);
// console.log(age);

//type castin is the processs of changingh the type of the variables data type like number to string or string to number etc


//swapping  there are three thing we will learn today 
//1. with a extra veriable
//  let a = 10;
// let b = 20;
// let c = a;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

//now without the extra virable

//   let a = 10;
// let b = 20;
// a = a+b; // now a = 30 
// b = a-b; // now b = 30-20 which is 10
// a = a-b; // now a = 30-10 which is 20 
// console.log(a);
// console.log(b);
// now there is 3rd 

// let a = 20;
// let b = 10;

// [a,b]=[b,a]
// console.log(a,b); // this is called destructuring assignment in js

// conditional statement in js

// can  you vote 

// age = Number(prompt("what is your age?"));

// if (isNaN(age)) {
//     console.log("Please enter a valid age.");
// } else if (age >= 18) {
//     console.log("You can vote.");
// } else {
//      console.log("you cannot vote");

// }


// //loops
// let n = Number(prompt("Enter the value of n"));

// if (isNaN(n)) {
//     console.log("Enter a valid number");
// } else {
//     if (n > 0) {
//         let sum = 0;

//         for (let i = 1; i <= n; i++) {
//             sum = sum + i;
//         }

//         console.log("The sum of the numbers is " + sum);
//     } else {
//         console.log("Please enter a positive number");
//     }
// // }

// //today we will rearn about array in js

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//this is the code ro rotate the array by one position to the right

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr);   

// // how to remove the duplicates from the array in js using dsa not the built in methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
// let uniqueArr = [];  //every element that comes from the loop stores here 
// for (let i = 0; i < arr.length; i++) { //doing the itiration over the array
//     if (!uniqueArr.includes(arr[i])) { //cheking tf the thing that has just come is already in the unique list if not go to the uniq list  else continew do nohting
//         uniqueArr.push(arr[i]); //pusiong the ellement
//     }
// }
// console.log(uniqueArr);


//one more dsa problem is to find the maximum and minimum number in the array without using the built in methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("The maximum number is " + max);
// console.log("The minimum number is " + min);



//lets do the anothr toady lets do another dsa problem in js which is to find the second largest number in the array without using the built in methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];
// let secondMax = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     }
//     else if (arr[i] > secondMax && arr[i] != max) {
//         secondMax = arr[i];
//     }
// }
// console.log("The second largest number is " + secondMax);

// lets do another one for the day which is to find the second smallest number in the array without using the built in methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = arr[0];
// let secondMin = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         secondMin = min;
//         min = arr[i];
//     }
//     else if (arr[i] < secondMin && arr[i] != min) {
//         secondMin = arr[i];
//     }
// }
// console.log("The second smallest number is " + secondMin);  


//one more dsa problem is to find the sum of all the elements in the array without using the built in methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("The sum of all the elements in the array is " + sum);
// //one last dsa problem is to find the average of all the elements in the array without using the built in methods

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum1 = 0;
// for (let i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
// }
// let average = sum1 / arr1.length;
// console.log("The average of all the elements in the array is " + average);

// // js to make a calculator using prompt and alert

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// }
// else if (operator === "-") {
//     result = num1 - num2;
// }
// else if (operator === "*") {
//     result = num1 * num2;
// }
// else if (operator === "/") {
//     result = num1 / num2;
// }
// else {
//     alert("Invalid operator");
// }

// alert("The result is: " + result);

// // // js to make a simple todo list using prompt and alert

// let todoList = [];

// while (true) {
//     let action = prompt("Enter 'add' to add a task, 'view' to view tasks, 'remove' to remove a task, or 'exit' to quit:");
    
//     if (action === "add") {

//         let task = prompt("Enter the task to add:");
//         todoList.push(task);
//         alert("Task added!");
        
//     }
//     else if (action === "view") {
//         if (todoList.length === 0) {
//             alert("No tasks in the list.");
//         } else {
//             alert("Tasks:\n" + todoList.join("\n"));
//         }
        
//     }
//     else if (action === "remove") {
//         let task = prompt("Enter the task to remove:");
// //         let index = todoList.indexOf(task);
// //         if (index !== -1) {
// //             todoList.splice(index, 1);
// //             alert("Task removed!");
// //         } else {
// //             alert("Task not found.");
// //         }

// //     }
// //     else if (action === "exit") {
// //         break;
// //     }
// //     else {
// //         alert("Invalid action. Please try again.");
// //     }
// // }
// // js to make a simple quiz using prompt and alert with 3 questions and 4 options for each question and the user has to select the correct option and at the end the user will get the score

// let score = 0;

// let questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["1. Berlin", "2. Madrid", "3. Paris", "4. Rome"],
//         answer: 3
//     },
//     {
//         question: "What is 2 + 2?",
//         options: ["1. 3", "2. 4", "3. 5", "4. 6"],
//         answer: 2
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["1. Earth", "2. Mars", "3. Jupiter", "4. Venus"],
//         answer: 2
//     }
// ];

// for (let i = 0; i < questions.length; i++) {
//     let userAnswer = Number(prompt(questions[i].question + "\n" + questions[i].options.join("\n")));


//     if (userAnswer === questions[i].answer) {
//         score++;
//         alert("Correct!");
//     }
//     else {
//         alert("Wrong! The correct answer is option " + questions[i].answer);
//     }
// }              
// alert("Your score is: " + score + " out of " + questions.length);





//a rock sessior paper game using prompt and alert in js

let userChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

alert("Computer chose: " + computerChoice);

if (userChoice === computerChoice) {
    alert("It's a tie!");
}
else if (
(userChoice === "rock" && computerChoice === "scissors") ||
(userChoice === "paper" && computerChoice === "rock") ||
(userChoice === "scissors" && computerChoice === "paper")
) {
    alert("You win!");
}
else {
    alert("You lose!");
}
 

