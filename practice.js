//Ques1:
// let a = 3;
// console.log(a);
// let b = new Number(3);
// console.log(b);
// let c = 3;
// console.log(c);
// console.log(a == b); //true
// console.log(a === b); //false
// console.log(b === c); //false

//Ques2:
// let greeting;
// greetign = {};
// console.log(greetign); //{}

//Ques3:
// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

//Ques4:
// const sum = eval("10*10+5")
// console.log(sum); //105

//Ques5:
// var num = 8;
// var num = 10;
// console.log(num); //10

//Ques6:
// console.log(typeof typeof 1); //string

//Ques7:
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers); //[ 1, 2, 3, <7 empty items>, 11 ]

//Ques8:
// console.log(3 + 4 + "5"); //"75"

//Ques9:
// console.log("I enrolled to the PW FSWD course"[0]); //"I"

//Ques10:
// const name = "PW Skills";
// console.log(name()); //TypeError: name is not a function

//Ques11:
// const one = false || {} || null;
// console.log(one); //{}
// const two = null || false || "";
// console.log(two); //""
// const three = [] || 0 || true;
// console.log(three); //[]
// console.log(one, two, three); //{} "" []

//Ques12:
// var x = 2;
// var y = "2";
// console.log(x === y); //false

//Ques13:
// for (let i = 1; i<5; i++) {
//     if (i === 3) continue;
//     console.log(i); //1 2 4
// }

//Ques14:
// const name = "PW Skills";
// console.log(!typeof name === "object"); //false
// console.log(!typeof name === "string"); //false

//Ques15:
// for (var i = 0; i < 5; i++) {
//     console.log(i);  //0 1 2 3 4
// }

//Ques16:
// var x = 0;
// while (x < 5) {
//         console.log(x); //0 1 2 3 4
//         x++;
// }

//Ques17:
// var x = 1;
// do {
//     console.log(x); //1 2 3 4
//     x++;
// } while (x < 5);

//Ques18:
// for (var i = 2; i < 5; i++) {
//     if(i === 3) {
//         break;
// }
//     console.log(i); //2
// }

//Ques19:
// for (var i = 2; i < 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i); // 2 4
// }

//Ques20:
// var a = [1, 2, 3, 4, 5];
// for (var i in a) {
//     if (a[i] % 2 === 0) {
//         console.log(a[i]); //2 4
//     }
// }


//Ques21:
// var day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday."); //Today is Monday
//         break;
//         case "Tuesday":
//             console.log("Today is Tuesday.");
//             break;
//             default:
//                 console.log("Today is not Monday or Tuesday.")
// }

//Ques22:
// var x = 20;
// switch (x) {
//     case x < 20:
//     console.log("x is less than 20");
//     break;
//     case x > 20:
//     console.log("x is greater than 20");
//     break;
//     default:
//         console.log("x is equal to 20"); //x is equal to 20
// }

//Ques23:
// var x = "20";
// switch (x) {
//     case 20:
//         console.log("x is equal to 20");
//         break;
//         default:
//         console.log("x is not equal to 20"); //x is not equal to 20
// }

//Ques24:
// var x = 20;
// var y = x > 10 ? x < 30 : "x is not greater than 10 and not less than 30";
// console.log(y); //true

//Ques25:
// var x = (10 > 5) ? "x is greater than 5";
// console.log(x); //syntaxError

//Ques26:
// var x = 10;
// var y = "10";
// var z = x === y ? "eqaul" : "not equal";
// console.log(z); //not equal

//Ques27:
// let x = 5;
// while (x < 6) {
//     console.log(x); //5
// }