// function sayHelloWorld(){
//     // document.write("<h1 style='background-color:red'>hello world</h1>");
//     alert("hello world")
// }

// const sayHelloWorld = () => {
//     alert("hello world");
// }
// const sayHye = () => {
//     alert("please enter your name")
// }
// make a javascript event which show alert box message "you hover on this button" when user hover on the button

// function WriteCookie() {
//     if (document.myform.customer.value == "") {
//         alert("Enter some value!");
//         return;
//     }
//     cookievalue = escape(document.myform.customer.value) + ";";
//     // document.cookie = "key1=value1;key2=value2;expires=date";
//     document.cookie = "name=" + cookievalue;
//     document.write("Setting Cookies : " + "name=" + cookievalue);
// }
// make a javascript event which show alert box message "you hover on this button" when user double click on the button

// logical (&&,|| , !)
// arithmetic(+,-,*,/,%)
// assignment operator(=)
// conditional operator || relation operator(>,<, <=,>=,== ,!=)
// 2>4, 2>=4
// let age = 25;
// age >25 || age<50
// console.log("result", age >= 29);
// console.log("result ",age != 25); ///25!=25


// AND (.)(&&) 
/**
 1.0=0;
0.1=0;
1.1=1;
0.0=0;   
 */
// OR (+)(||) 
/**
 1+0=1;
0+1=1;
1+1=1;
0+0=0;   
 */
/*
NOT(!)
!1=0;
!0=1;
/

Write a js program, make a variable and get the user age and check that user age greater than 20 or  less than 50*/

// var age = parseInt(prompt("Enter your age", age));
// console.log("result", age > 20 || age < 50);

// let age = 19
// let result = !(age > 19) || age < 15 && age > 17
// //T || F && T
// console.log("result", result);
// function printDocument() {
//     window.print()
// }
function getInputValue(id) {
    var value1 = document.getElementById(id).value;
    console.log("value", value1);
    // var paragarah = document.getElementById('para').innerHTML;
    // console.log("paragra", paragarah);
    // paragarah = "hello"

    document.getElementById('div1').innerHTML += "<h1>hello world</h1>"
    document.getElementById('div1').className += " dark-bg"

    // document.getElementById('para').innerHTML=value1
}


