// Hello World in Node.js

// Values and Datatypes

// Two types are Datatypes: (1) Primitive Datatype (2)Non-primitive Datatype

// (1) Primitive Data types (a)Numbers (b)Strings (c)Boolean (d)Null (e)Undedfined
// -- (a) Primitive data types

// - (a) Numbers: 2, 3, 4.5, 34,
var a = 40;
console.log(a)

let b = 10;
console.log(b)

// - (b) Strings: "MD ABDULLAH" or 'PW Skills'
let c = "PW Skills"
console.log(c)

var d = 'Hello Develoers'
console.log(d)

// - (c) Boolean: true, false

// - (d) null: null means nothing 

// - (e) undefined: 
let e;
console.log(e)


// (2) Non-prirmitive datatypes (a) Array [] (b)Object {}

// - (a) Array []:
let name1 = "hitesh"
let name2 = 'MD ABDULLAH'
let name3 = "Rohit"
let name4 = 'Kaif'
let no1 = 2
let no2 = 5
let Boolean = false
let name5 = "Arif" 
names = ["hitesh", 'MD ABDULLAH', "Rohit", 'Kaif', 2, 5, false, "Arif"]
console.log(names)

// - (b) Object {}
console.log(this)


// let , var, const 
// variables & vlaues: to store info.
// to create variables: let,var,const (not representing datatypes)
// syntax: keyword variablename=value
// Examples: let a = 40;
//          let myName = "MD ABDULLAH" or 'MD ABDULLAH'
//          var pwSkillsCoursePrice = 3500
//          const pi = 3.14
// keyword: var,let or const.
// variablename: a variable name is any combination of characters(a-z,A-Z),digits(0-9) and underscore( _ ).
/**
 * let a, let name, let attendance, let _a let a1234 (valid)
 */
// keywords cannot be used as a name of any variable.
// variable name should not begin with a number.
/**
 * let 1a, let a+b, let var, let function (not-valid)
 */
// every variable consume 64 bits of memory. ex: let a=1  let b='md' 128 bits of ram occupied.
// datatypes of a variable: the datatype of any variable depends on the value it holds.
/**
 *  a=1;      // Number.
 *  a='mohd';     // String.
 *  a=true;       // Boolean.  
 *  a=null;      // Null
 *  let a;     //  let a; or let a=undefined;  // Undefined.
 *  a=[];        // Array
 *  a=function(){}  // Function
 *  a={};          // Object
 */

let phonename = 'redmi note 7'
console.log(phonename)

let ram = '3gb'
console.log(ram)

let speed = 5000
console.log(speed)

let battery = '5000mah'
console.log(battery)

let valuable = false
console.log(valuable)

let price = 5000.0
console.log(price)

// const (constant)
/**
 *  similar to let.
 *  once value is initialize later cannot be changed.
 *  ex:  const pi=3.14
 *  syntax: const variablename=value 
 *   Example: const a = 40
 *            const b = 5.14;  
 */

/**
 *   console.log()
 *   console.warn()
 *   console.error()
 */

//Assignment Operators: = , 
let myName = "Md Abdullah"  //myName = camelCase styling in JS. 
myName = "Abdul Haque"
console.log(myName)

let highScore = 300
console.log(highScore)

let pwSkillsCoursePrice = 7000
console.log(pwSkillsCoursePrice)

pwSkillsCoursePrice = 3000
console.log(pwSkillsCoursePrice)

pwSkillsCoursePrice = 2500
console.log(pwSkillsCoursePrice)


//Arithmetic Operators
let pwCoursePrice = 200;
let gstOnCourses = 36;
let finalPurchaseAmount = pwCoursePrice + gstOnCourses;
console.log("Final amount to be paid: ", finalPurchaseAmount);

let pwDsaCourses = 500
console.log("Final price of DSA course: ", pwDsaCourses + gstOnCourses)
console.log("Final price of DSA Course: ", pwDsaCourses - gstOnCourses)
console.log("Final price of DSA Course: ", pwDsaCourses * gstOnCourses)
console.log("Final price of DSA Course: ", pwDsaCourses / gstOnCourses)
console.log("Final price of DSA Course: ", pwDsaCourses % gstOnCourses)
console.log("Final price of DSA Course: ", pwDsaCourses ** gstOnCourses)

let x = 5
let y = 2
console.log("Answer is: ", 5 + 2); //Addition
console.log("Answer is: ", 5 - 2); //Subtraction
console.log("Answer is: ", 5 * 2); //Multiplication
console.log("Answer is: ", 5 / 2); //division
console.log("Answer is: ", 5 % 2);  //Module - Modulus
console.log("Answer is: ", 5 ** 2); // 5 power ^ 2 = 25

let amazonPrice1 = 5000
let flipkartPrice1 = 6000
console.log(amazonPrice1++);   // print , ++
console.log(++amazonPrice1);   // ++ ,print


//Comparision Operators - Boolean (true or false)
let hiteshHighScore = 200
let rajuHighScore = 300
console.log(hiteshHighScore == rajuHighScore)
console.log(hiteshHighScore === rajuHighScore)
console.log(hiteshHighScore > rajuHighScore)
console.log(hiteshHighScore >= rajuHighScore)
console.log(hiteshHighScore < rajuHighScore)
console.log(hiteshHighScore <= rajuHighScore)
console.log(hiteshHighScore != rajuHighScore)
console.log(hiteshHighScore !== rajuHighScore)

let amazonPrice = 5000
let flipkartPrice = 6000
console.log("Prices of cost:"+ (amazonPrice < flipkartPrice))
console.log("Price of cost:" + (amazonPrice > flipkartPrice))

// && - AND
let value1 = true
let value2 = false
let value3 = true
let value4 = false
console.log(value1 && value3) //true
console.log(value1 && value2) //false
console.log(value4 && value3) //false
console.log(value2 && value4) //false

let isloggedIn = true
let cardDetails = false
console.log(isloggedIn && cardDetails) //false

let isloggedIn1 = true
let cardDetails1 = true
console.log(isloggedIn1 && cardDetails1) //true

//  || - OR
let values1 = true
let values2 = false
let values3 = true
let values4 = false
console.log(values1 || values3); //true
console.log(values1 || values2); //true
console.log(values4 || values3); //true
console.log(values2 || values4); //false

let gmailAccount = true
let emailAccount = false
console.log(gmailAccount || emailAccount) //true


// Decision (Coditions) - if, else, else if, Switch Case 
let age = 20
if (age >= 18) {
    console.log("You are Allowed for given vote")
}
else {
    console.log("You are not Allowed for given vote")
}

let signal = "gren"
if (signal == "red"){
    console.log("red => Stop")
}
else if (signal == "yellow"){
    console.log("yellow => Go Slow")
}
else if (signal == "green"){
    console.log("green => Go Fast")
}
else {
    console.log("Invalid")
}

//Switch Case
let user = "Admi"
switch (user) {
    case "Admin":
        console.log("He is Admin")
        break

    case "Student":
        console.log("He is Student")
        break

    case "Mentors":
        console.log("He is Mentor");  
        break
    
    default:
        console.log("I am default");
}


//loops - for loop, do While, while

//for loop
for (let i=0; i<5; i++) {
    console.log(i);
}

//while
let i = 0;
while (i < 7) {
    console.log(i);
    i++;
}

//Do while
let z = 0;
do {
    console.log("Hello World");
    z++;
} while(z < 4);

//Ternary Operator / Ternary Condition
// condition ? TRUE:FALSE
isloggedIn = true;
isloggedIn ? console.log("HOME PAGE"): console.log("LoginPage");

isloggedIn = false;
isloggedIn ? console.log("HOME PAGE"): console.log("LoginPage");

