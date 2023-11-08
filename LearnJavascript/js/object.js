// var human = {
//     name: "waqas",
//     fatherName: "abc",
//     run: () => {
//         console.log("hello");
//         return "hello 3"
//     }
// }
// console.log("humna",human);
// console.log("human.name",human.run());
// console.log("document",document);
// var title=document.title;
// console.log("title",title);
// document.write("hello")

//constructor
// let employee=new Object();
// employee.name="ali";
// employee.age=14;
// console.log("employee",employee);





// ****************Objectts
var student1 = {
    name: "waqas",
    class: "5th semester",
    rollNo: 4593,
    friend: {
        name: "fazizan",
        id: 'fjdksfjklsdfjkl'
    },
    walk: function () {
        console.log("waqas is walking")
        return this.id
    }
}
student1.regNo = "2021-gcuf-343"
student1.name = "faizan"
console.log("student", student1.name);
// console.log("student class",student.class)
// console.log("frinds name ", student1.friendsName[0]);
// var friendArray = student.friendsName
// console.log("friend name", friendArray[0]);
console.log("function", student1.walk());
// console.log("student 1 friend name",student1.friend.name);

// for (let value in student1) {
//     console.log(value);
// }


// var studentArray = [student1, {
//     name: "faizan",
//     class: "5th semester",
//     rollNo: 4593,
//     friend: {
//         name: "fazizan",
//         id: 'fjdksfjklsdfjkl'
//     },
//     walk: function () {
//         console.log("waqas is walking")
//         return this.id
//     }
// }, {
//     name: "ali",
//     class: "5th semester",
//     rollNo: 4593,
//     friend: {
//         name: "fazizan",
//         id: 'fjdksfjklsdfjkl'
//     },
//     walk: function () {
//         console.log("waqas is walking")
//         return this.id
//     }
// }
// ]

// console.log("objec",studentArray[0].name);

var student = {
    name: "faizan",
    rollNO: 343,
    address: "hello"
}
console.log("keys", Object.keys(student));//['name', 'rollNO', 'address']
console.log("values", Object.values(student))//['faizan', 343, 'hello']
console.log("eneries", Object.entries(student))
//
// [Array(2), Array(2), Array(2)]
// 0
// :
// (2)['name', 'faizan']
// 1
// :
// (2)['rollNO', 343]
// 2
// :
// (2)['address', 'hello']



// console.log("property",student.hasOwnProperty("jfksdjf"));
// console.log("check ", "namjfdfe" in student);
// var objectValuesArray = Object.values(student)
// for (let item in objectValuesArray) {
//     // console.log("student",student);
//     console.log("person", objectValuesArray[item]);
// }
// Object.keys(testScore);  // gives all keys
// Object.values(testScore); // gives all values
// Object.entries(testScore); // gives nested arrays of key-value pairs



var studen1t = {
    studentName: "faizan",
    studentId: "3r3",
}

let { studentId } = studen1t
// // console.log("studet", name);
console.log("student", studentId);
// if (studentId == "jfkd") {
//     console.log("student name", studentName);
// }

var student = [2, 4, 5]
// var [index1, index3, student3] = student
// console.log("values", student1);

