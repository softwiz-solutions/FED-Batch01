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
// function getInputValue(id) {
//     var value1 = document.getElementById(id).value;
//     console.log("value", value1);
//     // var paragarah = document.getElementById('para').innerHTML;
//     // console.log("paragra", paragarah);
//     // paragarah = "hello"

//     document.getElementById('div1').innerHTML += "<h1>hello world</h1>"
//     document.getElementById('div1').className += " dark-bg"

//     // document.getElementById('para').innerHTML=value1
// }

// function swapImage(id) {
//     document.getElementById(id).src = ""
// }

// function changeParaColor() {
//     var allPragrah = document.getElementsByTagName('p')
//     // console.log("all paragra", allPragrah);
//     // allPragrah[0].style.color = "red"
//     for (var i = 0; i < allPragrah.length; i++) {
//         allPragrah[i].style.color = "green"
//         allPragrah[i].style.fontSize='23px'
//     }
// }


// function dom() {
//     var div = document.getElementById('para-id');
//     var paragrah = div.getElementsByTagName('p');
//     var heading = div.getElementsByTagName('h1');
//     console.log("heading", heading);
//     for (var i = 0; i < paragrah.length; i++) {
//         paragrah[i].style.color = "green"
//         paragrah[i].style.fontSize = '23px'
//     }
//     heading[0].style.color = "green"
// }


// function dom() {
// var div = document.getElementById('para-id')
// var tagName = div.childNodes;

// for (var i = 0; i < tagName.length; i++) {
//     var tagType = tagName[i].nodeType;
//     console.log("tagType ", i, "=", tagType, tagName[i]);
//     if (tagType == 1) {
//         // tagName[i].innerHTML = "hello"
//         console.log("this is element");
//     }
//     else {
//         console.log("this is space");
//     }
// }
// for(let index of tagName){
//     console.log("tagname",index);
// }
// console.log("tagName", tagName);
// console.log("nodetype", nodeType);
// var tagType = tagName.nodeType;
// console.log("tagType", tagType);
// }
// dom()
// var div = document.getElementById('hello-div')
// console.log("div partent",div.nextElementSibling);

// console.log("target node name",div.innerHTML);

// function dom() {
//     var p = document.getElementById('para')
//     p.setAttribute('class', 'dark-bg');// <p classs="dark-bg" ></p>
//     p.innerHTML += " hello"
//     console.log("p attribute",p.attributes);
// }

// dom()
function addingNode() {
    var newParagrah = document.createElement('p')
    // console.log("new para", newParagrah);
    var text = document.createTextNode("what is your name?")
    newParagrah.appendChild(text);//<p>what is your name</p>
    newParagrah.setAttribute('class', 'dark-bg');// <p classs="dark-bg" >what is your name</p>
    var div = document.getElementById("parent-div")
    div.appendChild(newParagrah)
    // console.log("p",newParagrah);
}















