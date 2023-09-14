//loop

/*
1. while loop
2. do while loop
3. for loop
*/
// variable initilaztion , checking, body ,incremen/decrement
// while(condition){
//     satement
// }

// var counter = 5;
// while (counter <10) {
//     console.log(counter);
//     counter++;
// }

// for (var i = 0; i < 10; i++) {
//     console.log("hello");
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
outerloop:
for (var i = 0; i < 10; i++) {
    innterloop:
    for (var j = 0; j < 10; j++) {

        if (j == 3) {
            break innterloop;
        }
    }
    console.log("i", i);
}



