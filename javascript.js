function sum(x,y) {let add = x + y; console.log(add); alert(add);}
function subtract(x,y) {let sub = x - y; console.log(sub); alert(sub);}
function multiply(x,y) {let mult = x * y; console.log(mult); alert(mult);}
function divide(x,y) {let div = x / y; console.log(div); alert(div);}

let x = Number(prompt("Input number 1"));
let y = Number(prompt("Input number 2"));
alert(x + y);

 //String Data Type
// let color = "yellow";
 //Number Data Type
// let length = 16;
// let weight = 7.5;
 //Big Int Data Type
// let y = BigInt(1234567890);
 //Boolean Data Type
// let a = true;
// let b = false;
 //Object Data Type
// const person = {firstname:"Aayan", lastname:"Kumar", age:"13"};
 //Array Object Data Type
// const vehicles = ["car","truck","plane","bike"];
 //Undefined Data Type
// let name;
 //Null Data Type
// let z = null;

// let age = Number(prompt("Your Age"));
// if (age <=16)
// alert("Your not able to drive");
//     if (age >=16)
//         alert("Your able to drive");

// // let age = Number(prompt("Your Age"));
// if (age <=15)
// {alert("You are not able to drive");}
//     else
//     {alert("You are able to drive");}

// let time = Number(prompt("Enter Time"));
// if (time < 10) {
//   alert("Good morning");
// } else if (time < 20) {
//   alert("Good day");
// } else {
//   alert("Good evening");
// }

// let text = (age < 18) ? "Minor" : "Adult"
// (condition) ? expression1 : expression2

// let hour = Number(prompt("Enter Time"));
// if (hour < 18) {
//     alert("Good Day");
// } else {
//     alert("Good Evening");
// }

// let time = Number(prompt("Enter Time"));
// if (time < 20) {
//     alert("Football");
// } else if (time > 20) {
//     alert("Tennis");
// } else {
//     alert("Basketball");
// }

// let number = Number(prompt("Enter Number"));
// if (number > 0) {
//     alert("Positive");
// } else if (number < 0) {
//     alert("Negative");
// } else {
//     alert("Zero");
// }

// let fact = Number(prompt("Enter Number"));
// if (fact%2 == 0) {
//     alert("Even");
// } else {
//     alert("Odd");
// }

// let score = Number(prompt("Enter Score"));
// if (score > 100) {
//     alert("Enter Score 0-100");
// } else if (score < 40) {
//     alert("Fail");
// } else if (score < 60) {
//     alert("Pass");
// } else if (score < 80) {
//     alert("Good");
// } else {
//     alert("Excellent");
// }

// let age = Number(prompt("Enter Age"));
// if (age < 13) {
//     alert("Child");
// } else if (age < 20) {
//     alert("Teenager");
// } else if (age < 60) {
//     alert("Adult");
// } else {
//     alert("Senior");
// }

// let light = prompt("Enter Traffic Light Color");
// if (light == "red") {
//     alert("Stop");
// } else if (light == "yellow") {
//     alert("Get Ready");
// } else if (light == "green") {
//     alert("Go")
// } else {
//     alert("Invalid Color");
// }

// let temperature = Number(prompt("Enter temperature"));
// if (temperature < 10) {
//     alert("Very Cold");
// } else if ( temperature < 20) {
//     alert("Cold");
// } else if (temperature < 30) {
//     alert("Warm");
// } else {
//     alert("Hot");
// }

// let n = Number(prompt("Enter First Number"));
// let m = Number(prompt("Enter Second Number"));
// let o = prompt("Enter Operation (-,+,*,/)");
// if (o == "-") {
//     alert(n - m);
// } else if (o == "+") {
//     alert(n + m);
// } else if (o == "*") {
//     alert(n * m);
// } else if (o == "/") {
//     alert(n / m);
// } else {
//     alert("Invalid Operation or Number");
// }

// let text = (age < 18) ? "Minor" : "Adult";

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// let choice = prompt("1. Pizza  2. Burger  3. Pasta");

// switch (choice) {
//   case "1":
//     alert("You ordered Pizza");
//     break;

//   case "2":
//     alert("You ordered Burger");
//     break;

//   case "3":
//     alert("You ordered Pasta");
//     break;

//   default:
//     alert("Invalid choice");
// }

// let light = prompt("Red Yellow Green").toLowerCase();
// switch (light) {
//     case "red":
//         alert("Stop");
//         break;

//     case "yellow":
//         alert("Get Ready");
//         break;

//     case "green":
//         alert("Go");
//         break;

//     default:
//         alert("Invalid Color");
// }

// let num1 = Number(prompt("Number 1"));
// let num2 = Number(prompt("Number 2"));
// let operation = prompt("Enter Operator (+,-,*,/)");
// switch (operation) {
//     case "+":
//         alert(num1 + num2);
//         break;

//     case "-":
//         alert(num1 - num2);
//         break;

//     case "*":
//         alert(num1 * num2);
//         break;

//     case "/":
//         if (num2 === 0) {
//             alert("Cannot Divide by 0");
//         } else {
//             alert(num1 / num2);
//         }
//         break;
//     default:
//         alert("Invalid Operator");
// }

// let day = Number(prompt("Enter Day (1-7)"));
// switch (day) {
//     case 1:
//         alert("Monday");
//         break;

//     case 2:
//         alert("Tuesday");
//         break;

//     case 3:
//         alert("Wednesday");
//         break;

//     case 4:
//         alert("Thursday");
//         break;

//     case 5:
//         alert("Friday");
//         break;

//     case 6:
//         alert("Saturday");
//         break;

//     case 7:
//         alert("Sunday");
//         break;

//     default:
//         alert("Invalid Day");
// }

// let fruits = ["apple", "banana", "mango"];

// alert(fruits[0]); // apple
// alert(fruits[1]); // banana
// alert(fruits[2]); // mango

//    let i;
//        for (i = 0; i < 5; i++); {
//            console.log(i); }
// VM570:3 5
// undefined
//    let i;
//        for (i = 0; i < 5; i++); {
//            console.log(i < 5); }
// VM592:3 false
// undefined
//    let i;
//        for (i = 0; i < 5; i++); {
//            console.log(i > 5); }
// VM598:3 false
// undefined

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
// console.log(i); 
// }

// for (let i = 5; i > 0; i-=1) {
// alert(i); 
// }

// let num = Number(prompt("Choose Number"));
// for (let i = 1; i <= 12; i++) {
// alert(num * i);
// }

// let total = 0;
// let i;
// for (i = 1; i < 20; i += 2) {
//     total = total + i;
// } alert(total);

// let total = 0;
// let i;
// for (i = 0; i < 20; i += 2) {
//     total = total + i;
// } alert(total);

// let count = 0;
// let i;
// for (i = 25; i <= 75; i++) {
//     count++
// }

// let total = 0;
// for (let i = 2; i <= 100; i += 2) {
//     total++;
// }
// alert(total); // 50

// let sum = 0
// let i;
// for (i = 2; i <= 20; i+=2) {
//     sum = (sum + i);
// } alert(sum);

// let factorial = 1;
// let i;
// for (i = 5; i >= 1; i--) {
//     factorial = (factorial * i);
// } 
// console.log(factorial);

// let i;
// for (i = 1; i <= 30; i++) {
//     if(i % 3 === 0) {
//         console.log(i)
//     }
// }

// let i;
// for (i = 1; i <= 60; i++) {
//     if(i % 6 === 0) {
//         console.log(i)
//     }
// }

// let i;
// let count = 0;
// for (i = 1; i <= 60; i++) {
//     if(i % 6 === 0) {
//         count++;
//     }
// } 
// console.log(count);

// let i;
// for (i = 1; i <= 20; i++) {
//     if ( i % 5 == 0) {
//      continue;
//     }
// console.log(i);
// }

// let j = Infinity;
// for (i = 1; i <= 5; i++) {
//     let k = Number(prompt("Pick a Number"));
//     if (k < j) {
//         j = k;
//     }
// }
// console.log(j);

// let count = 0;
// let strings = ["hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi"];
// for (let i = 0; i < strings.length; i++) {
//     count++;
// }
// console.log(count);

// let i;
// let sumsum = 0;
// let fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12435, 356, 54, 678, 16, 9236, 216, 3, 1365, 1];
// for (i = 1; i < fruits.length; i++) {
//     sumsum = (sumsum + fruits[i]);
// }
// console.log(sumsum);