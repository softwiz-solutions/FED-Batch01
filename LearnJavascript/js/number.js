// var score = 34.9;
// var roundAbout = Math.round(score)
// console.log("score=",score);
// console.log("round", roundAbout);
// console.log("ciel", Math.ceil(score));
// console.log("floor", Math.floor(score));

// var randomNumber = Math.random()*2;
// console.log("randomNumber", randomNumber);
// console.log("floor about",Math.floor(randomNumber));
// console.log("round about",Math.round(randomNumber));
// console.log("ceil about",Math.ceil(randomNumber));
// console.log("random number", randomNumber));

// console.log("parse int", parseInt("-9.09"));
// console.log("parse float", parseFloat("-9.3"));
// var value = prompt("enter value");
// console.log("type", typeof (value));
// var convertedValue = Number(value)
// console.log("convertedValue", convertedValue);
// console.log("after Number()", typeof (convertedValue));
// console.log("number");

// var number = 234.55555;
// console.log("number ", number.toFixed(2));
// var weekDays = ['sun', 'sat', 'mon', 'tue', 'wed', 'thu', 'fri']
// var currentDateTime = new Date();
// var currentDay = currentDateTime.getDay();

// console.log("weekday", weekDays[currentDay]);
// console.log("currentDay", currentDay);
// console.log("current data and time ",currentDateTime.getTime());




//******************************************** */
// age calculator
// var today = new Date();
// var userBirthday=prompt("enter your value","June 30,2000")
// var birthday = new Date(userBirthday);
// var todayYear = today.getFullYear();
// var birthdayYear = birthday.getFullYear();
// var diff = todayYear - birthdayYear;
// console.log("diff", diff,"today year",todayYear,"birthday year",birthdayYear);
//******************************************** */



// //  jan 1 ,1970
var today = new Date();
// var userBirthday=prompt("enter your value","June 30,2000")
var birthday = new Date("June 30,2000");
var todayMiliseconds = today.getTime();
var birthdayMiliseconds = birthday.getTime();
var diff = todayMiliseconds - birthdayMiliseconds;
var year = diff / (1000 * 60 * 60 * 24 * 365)
var months = diff / (1000 * 60 * 60 * 24)
console.log("months", Math.floor(months));
// console.log("year", Math.floor(year), "mont", Math.floor(month));

// console.log(Math.floor(value));



