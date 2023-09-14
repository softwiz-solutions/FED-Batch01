// *****Condition*************
// 1.if
// 2. if else
// 3 . if else if
// 4 nested if


// 1.if
// if(condition){

// }
// var age = 30
// if (age > 20 && age < 25) {
//     console.log("you are adult");
// }

// 2. if else
// if(condition){

// }
// else {

// }

// var age = 18

// if (age < 18) {
//     console.log("you are children");
// }
// else {
//     console.log("you are adult");
// }


// var percentageInput = prompt("Enter your percentage");
// var percentage=parseInt(percentageInput)
// console.log("percentage", typeof (percentage));
// if (percentage >= 80) {//80
//     console.log("A");
// }
// else if (percentage >= 70) { //70-79
//     console.log("B");
// }
// else if (percentage >= 60) {//60-69
//     console.log("C");
// }
// else if (percentage >= 40) { //
//     console.log("D");
// }
// else {
//     console.log("fail");
// }

// write a javascript program , get input from user  obtain marks, total marks, and calculate percentage and show the grade accordingly



// nested if 
// var age = 18;
// if (age >= 18) {
//     if (age == 18) {
//         console.log("we are adult");
//     }
//     else {
//         console.log("you are grown up");
//     }
// }
// else if(age<18) {

//     console.log("you are children");
// }
// else{
//     if()
// }

//  bill calculator 
// var basicSallary, grossSalary;
// var filer = true;

// basicSallary = 18000;
// if (basicSallary > 15000 && filer == true) {
//     if (basicSallary < 17000) {
//         grossSalary = basicSallary + 2000;
//         console.log("grossSalary", grossSalary);

//     }
//     else {
//         grossSalary = basicSallary + 5000
//         console.log("grossSalary", grossSalary);

//     }
// }
// else if (basicSallary > 15000 && filer == false) {
//     if (basicSallary < 17000) {
//         grossSalary = basicSallary + 1000;
//         console.log("grossSalary", grossSalary);


//     }
//     else {
//         grossSalary = basicSallary + 2000
//         console.log("grossSalary", grossSalary);

//     }
// }

// else {
//     grossSalary = basicSallary
//     console.log("grossSalary", grossSalary);
// }


// var userName = prompt("Eneter user name");
// var password = prompt("enter password");
// // if (userName == "abdulhanan" && password == 123) {
// //     console.log("sussesfully login");
// // }
// // else {
// //     console.log("wrong user or password");
// // }
// if (userName == "abdulhanan") {
//     if (password == 123) {
//         console.log("successfully login");
//     }
//     else {
//         console.log("wrong password");
//     }
// }
// else if (password == 123) {
//     if (userName == "abdulhanan") {
//         console.log("successfully login");
//     }
//     else {
//         console.log("wrong user naame");
//     }

// }
// else {
//     console.log("user name and password is wrong");
// }

var dayNumber = parseInt(prompt("enter day number"));

switch (dayNumber) {
    case "*":
        console.log("Monday");
        console.log("jfsdljfkd");
        break;

    case 2:
        console.log("tuesday");
        break;
    default:
        console.log("enter valid number");
}


