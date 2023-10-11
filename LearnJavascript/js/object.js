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


var studentArray = [student1, {
    name: "faizan",
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
}, {
    name: "ali",
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
]

console.log("objec",studentArray[0].name);