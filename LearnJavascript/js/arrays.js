// way 1

// var student0 = "waqas";
// var student1 = "usama";
// var student2 = "faizan";
// var student3 = "ali";
// var student4 = "moosa";
// var student5 = "ahmad";
// var student6 = "fakhar";

// way 2
// variable type-> array
// let studentName=["waqas","usama","faizan","ali","moosa","ahmad","fakhar"]
// console.log("first element of array",studentName[0]);
// // console.log(studentName[2]);
// // console.log("studentName[0]",studentName[0],studentName[1]);
// studentName[0]="ahmad";
// console.log("first element of array",studentName[0]);

// let fruitsName=["banana","apple","orange","stawberry","jerry"]
// console.log("fruistName",fruitsName.length);
// var a;


// let fruitsName=["banana","apple","orange","stawberry","jerry"]
// console.log("fruistName",fruitsName);
// fruitsName[0]="mango"
// // let fruitsName=[];
// // fruitsName[0]="banana";
// // fruitsName[1]="apple";
// console.log("fruitsName",fruitsName);

// methods on array
/*
1. pop()--> remove last element of array
2. push("values")-->add element in last of array
3. shift()--> remove element from start of array
*/

// let fruitsName=["banana","apple","orange","stawberry","jerry"]
// console.log("be default",fruitsName);
// console.log("last element to be deleted fruitsName.pop()",fruitsName.pop());
// console.log("updated element",fruitsName);
// fruitsName[5]="hello"
// console.log("firstName",fruitsName);


// 2. push
// let fruitsName=["banana","apple","orange","stawberry","jerry"]
// // fruitsName.push(["mango","watermelon"],["melon","amrood"])
// fruitsName.push("watermelon","amrood")
// fruitsName.push("appl2")
// fruitsName.pop()
// console.log("firstName",fruitsName);


// 3. shift
// let fruitsName = ["banana", "apple", "orange", "stawberry", "jerry"]
// var deletedElement=fruitsName.shift();
// console.log("fruitsName",fruitsName,"deletedElement",deletedElement);
// 4 . unshift--> add in the start of array
// console.log("array", fruitsName);
// fruitsName.unshift("watermelon", "melon", "hello")
// console.log("array after unshfit", fruitsName);

// add elements by your choice

// let pets = ["dog", "duck", "horse", "cat", "sheep"]

// // console.log("pets", pets);
// pets.splice(2, 2, "pig", "duck", "emu");
// pets.splice(2, 3)
// console.log("pets splice", pets);
// array methods:
// var pets=['324', 'duck', "dog"]
// var values = ["ab2c", "abc", "abc"]
// var frindName=['ali','ahmad','arslan']
// var newArray=[pets,frindName]
// var newArray=pets.concat(frindName)
// console.log("newArray",newArray);


//2.  EVERY()
/*Returns true if every element in this array
 satisfies the provided testing function.*/
// var result = values.every((element) => element == "abc")
// console.log("result", result)


// 3. filter()
/**
 * Creates a new array with all of the elements of
this array for which the provided filtering function
returns true.
 *
 */

// var values = [12, 24, 36, 40]

// var filteredValue = values.filter((a) => a>12);
// console.log("filteredValue", filteredValue)

// 3. For Each()
/*Calls a function for each element in the array. */
// var values = [12, 24, 36, 40]
// values.forEach((value,index)=>{
//     console.log("value",value,index);
// })


// 4. index of
/**
 * Returns the first (least) index of an element
within the array equal to the specified value, or -
1 if none is found.
 *
 */
// var values=[122,12,12,123]
// var indexOf=values.indexOf(12)
// var lastIndexOf=values.lastIndexOf(12)

// console.log("indexof",indexOf);
// console.log("lastIndexOf",lastIndexOf);


// 5. join ()
//Joins all elements of an array into a string.
// var values=[234,"afd",4]
// var newArray=values.join('-$')
// console.log("values",newArray);

// var fruitsNames = ["apple", "banana", "orange"]
// // console.log("fruistName", fruitsNames);
// // map();
// var newArray = fruitsNames.map((element, index) => {
//     console.log("elemet", element);
//     console.log("index", index);
//     var newElement = element + "abc"
//     return newElement
// });
// console.log("newArray", newArray);
// console.log("fruitsName",fruitsNames);

// var numbArray = [0, 1, 2, 3,4]
// var total = numbArray.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// });
// document.write("total is : " + total);
// var cityToCheck = 'karachi'
// var someChars = cityToCheck.slice(0, 1).toUpperCase() + cityToCheck.slice(1);
// console.log("somechars", someChars);
// console.log("length",cityToCheck.length);

var text = 'It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his'
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }

// var firstChar = text.indexOf("World War II");
// //61
// if (firstChar != -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12)
// }
// // console.log("firstCahr", firstChar);
// // console.log("text", text);
// console.log("text", text);
