//loop
// console.log("pakistan zindabad");
/*
1. while loop
2. do while loop
3. for loop
*/
// variable initilaztion , checking, body ,incremen/decrement
// while(condition){
//     satement
// }

// var counter = 0;
// while (counter <10) {
//     console.log("pakistan zindabad");
//     counter++;
// }
// console.log("after while looop");

// for(initialization;condtion;increment/decrement){
//     body
// }

// for(var i=100;i>0;i--){
//     // console.log("paksitan zindabad");
//     console.log(i);
// }

// var i = 10;
// do {
//     console.log("hello");
//     i++
// } while (i < 10)

// var number = parseInt(prompt("enter number"));
// for (var i = 1; i <= 10; i++) {
//     console.log(` ${number} X ${i} = ${number * i} `);
// }

// break; continue

// for (var i = 0; i < 100; i++) {
//     if (i == 88) {
//         continue;
//     }
//     console.log("value ", i);
//     console.log("hello");
// }

// console.log("hello");
// outerloop:
// for (var i = 0; i < 10; i++) {
//     innterloop:
//     for (var j = 0; j < 10; j++) {

//         if (j == 3) {
//             break innterloop;
//         }
//     }
//     console.log("i", i);
// }


// var i = 10;
// do {
//     console.log("paksitan zindabad");
//     i++;
// } while (i < 10)
/*
1. initizlie
2. body exceuction
3. increment/decrement
4. condition check
*/
// nested loop

// for (var i = 0; i < 10; i++) {

//     for (var j = 0; j < 10; j++) {
//         // console.log("inner loop j=", j);
//         console.log("*");
//     }
//     console.log("\n");
// }

// break continue;
// for (var i = 0; i < 10; i++) {
//     console.log("i", i);
//     if (i == 8) {
//         continue
//     }
//     console.log("loop");
// }

// console.log("hello world");


// arrays 


var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Karachi", "ISB"];
var matchingCity = prompt("enter your city", cleanestCities);
console.log("value of matching city", matchingCity);
// if (matchingCity == cleanestCities[0]) {
//     console.log("your city is beautiful");
// }
// else if (matchingCity == cleanestCities[1]) {
//     console.log("your city is beautiful");
// }
// else if (matchingCity == cleanestCities[2]) {
//     console.log("your city is beautiful");
// }
// else if (matchingCity == cleanestCities[3]) {
//     console.log("your city is beautiful");
// }
// else if (matchingCity == cleanestCities[4]) {
//     console.log("your city is beautiful");
// }
// else {
//     console.log("your input is wrrong");
// }

// for (var i = 0; i < cleanestCities.length; i++) {
//     if (matchingCity == cleanestCities[i]) {
//         console.log("your city is beautiful", matchingCity);
//         break;
//     }
// }
