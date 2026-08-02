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