// Hello World in Node.js

// Values and Datatypes

// Two types are Datatypes: (1) Primitive Datatype (2)Non-primitive Datatype

// (1) Primitive Data types (a)Numbers (b)Strings (c)Boolean (d)Null (e)Undedfined

// -- (a) Primitive data types are:
// - (a) Numbers : 2, 3, 4.5, 34

var a = 40; //Initialization of a variable & values
console.log(a); //40
console.log(typeof a); //number

let b = 10; //Initialization of a variable & values
console.log(b) //10
console.log(typeof b) //number

const n = 6 //(Accessing of a variable & values, but not change the value because it's a constant value here)
console.log(n) //6
console.log(typeof n) //number

var x = 2 //Initialization of a variable & values
console.log(x) //2
console.log(typeof x) //number

var y = 15 //Initialization of a variable & values
console.log(y) //15
console.log(typeof y) //number

const pi = 3.14 //(Accessing of a variable & values, but not change the value because it's a constant value here)
console.log(pi) //3.14
console.log(typeof pi) //number

let l = 50 //Initialization of a variable & values
console.log(l) //50
console.log(typeof l) //number

const u = 7 //(Accessing of a variable & values, but not change the value because it's a constant value here)
console.log(u) //7
console.log(typeof u) //number

const p = 5 //(Accessing of a variable & values, but not change the value because it's a constant value here)
console.log(p) //5
console.log(typeof p) //number

const m = 12 //(Accessing of a variable & values, but not change the value because it's a constant value here)
console.log(m + b) //22
console.log(typeof m) //number

let speed = 5000 
console.log(speed) //5000
console.log(typeof speed) //number

let price = 5000.0 //Initialization of a variable & values
console.log(price) //5000
console.log(typeof price) //number


// - (b) Strings : "MD ABDULLAH" or 'PW Skills' or 'Md Abdullah' or "APNA COLLEGE" or 'Full Stack Academy'

let c = "PW Skills" //Initialization of a variable & values
console.log(c) //PW Skills
console.log(typeof "PW Skills") //string

var d = 'Hello Developers' //Initialization of a variable & values
console.log(d) //Hello Developers
console.log(typeof 'Hello Developers'); //string

const a2 = 'Full Stack Academy' //Initialization of a variable & values
console.log(a2) //Full Stack Academy
console.log(typeof a2) //string

let collegeName = "APNA COLLEGE" //Initialization of a variable & values
console.log(collegeName) //APNA COLLEGE
console.log(typeof collegeName) //string

let myName = "MD" //Initialization of a variable & values
myName = "MD Abdullah" //Initialization of a variable & values
console.log(myName) //MD ABDULLAH
console.log(typeof myName) //string

let cityName = "California"; //Initialization of a variable & values
cityName = "California In USA"; //Initialization of a variable & values
console.log(cityName); //California In USA
console.log(typeof cityName); //string

const countryName = "India" //Initialization of a variable & values
console.log(countryName) //India
console.log(typeof countryName)

let phonename = 'redmi note 7' //Initialization of a variable & values
console.log(phonename) //redmi note 7
console.log(typeof phonename) //string

let ram = '3gb' //Initialization of a variable & values
console.log(ram) //3gb
console.log(typeof ram) //string

let battery = '5000mah'; //Initialization of a variable & values
console.log(battery); //5000mah
console.log(typeof battery); //string


// - (c) Boolean : true, false
let valuable = false //Initialization of a variable & values
console.log(valuable) //false
console.log(typeof valuable) //boolean


// - (d) null : It is a consider as Empty('') or false or Not a number (Null means nothing, not zero (0));
var studentsEnrolled = NaN;


// - (e) undefined : 
let e; //Initialization of a variable only, not given value
console.log(e) //undefined
console.log(typeof e); //undefined

var x //Initialization of a variable only, not given value
console.log(x) //undefined
console.log(typeof x) //undefined

let y2 //Initialization of a variable only, not given value
console.log(y2) //undefined
console.log(typeof y2) //undefined

let k //Initialization of a variable only, not given value
console.log(k) //undefined
console.log(typeof k) //undefined

// - (f) Bigint :


// - (g) Symbol :


// (2) Non-prirmitive datatypes (a) Array [] (b)Object {}

// - (a) Array [] : ["hitesh", 'MD ABDULLAH', "Rohit", 'Kaif', 2, 5, 76.8, false, "Arif"]
let name1 = "hitesh"
let name2 = 'MD ABDULLAH'
let name3 = "Rohit"
let name4 = 'Kaif'
let no1 = 2
let no2 = 5
let decimalNum = 76.8
let Boolean = false
let name5 = "Arif" 
names = ["hitesh", 'MD ABDULLAH', "Rohit", 'Kaif', 2, 5, 76.8, false, "Arif"]
console.log(names)
console.log(typeof names);


// - (b) Object {} :
console.log(this) // {} Empty Parenteses (pre-defined keyword)


// - (c) function: (){} :


// let , var, const 
// Pre-defined keywords are: let, var, const
// variables & vlaues: to store info.
// to create variables: let,var,const (not representing datatypes)
// syntax: keyword variablename=value
// Examples: let a = 40;
// let myName = "MD ABDULLAH" or 'MD ABDULLAH'
// var pwSkillsCoursePrice = 3500
// const pi = 3.14
// keyword: var,let or const.
// variablename: a variable name is any combination of characters(a-z or A-Z), digits(0-9) and underscore(_).
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


//Operators : Assignment Operator, Arithemetic Operator, Comparision Operator, Bitwise Operator, logical Operator, Conditional Operator, etc.)

// - (a) Assignment Operators : (=, +=, -=, *=, /=, %=, **=) 
let my_Name = "Md Abdullah"  //myName = camelCase styling in JS. 
my_Name = "Abdul Haque"
console.log(my_Name)

let highScore = 300
console.log(highScore)

let pwSkillsCoursePrice = 7000
console.log(pwSkillsCoursePrice)

pwSkillsCoursePrice = 3000
console.log(pwSkillsCoursePrice)

pwSkillsCoursePrice = 2500
console.log(pwSkillsCoursePrice)


// - (b) Arithmetic Operators : (+, -, *, /, %, **, ++num, num++, --num, num--)
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

let x3 = 5
let y3 = 2
console.log("Answer is: ", 5 + 2); //Addition
console.log("Answer is: ", 5 - 2); //Subtraction
console.log("Answer is: ", 5 * 2); //Multiplication
console.log("Answer is: ", 5 / 2); //division
console.log("Answer is: ", 5 % 2);  //Module - Modulus
console.log("Answer is: ", 5 ** 2); // 5 power ^ 2 = 25

let amazonPrice1 = 5000
let flipkartPrice1 = 6000
console.log(amazonPrice1++);   // print, ++
console.log(++amazonPrice1);   // ++, print

//increment Operators: (x++)
let A = 10
let Y = A++
console.log(A)
console.log(Y)

//decrement Operators: (x--) 
let B = 20
let Z = B--
console.log(B)
console.log(Z)

//Unary plus Operators: (+a)
let o = 3;
o = +o;
console.log(o)

//Negation Operators: (-a)
let j = 3;
j1 = -j;
console.log(j1)


// - (c) Comparision Operators : (==, ===, !=, !==, >, >=, <, <=)
//()Boolean (true or false)

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

// - (d) logical Operator (&&, ||, !)
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

let gitHubloggedIn = true
let discordAccount = false
let gmailAccount = true
let emailAccount = false
console.log(gitHubloggedIn || gmailAccount)
console.log(gitHubloggedIn || discordAccount)
console.log(gmailAccount || emailAccount)
console.log(discordAccount || emailAccount)

let gmail_Account = true
let email_Account = false
console.log(gmail_Account || email_Account) //true


// Decision (Coditions) - if, else, else if, Switch Case 
let age = 20
if (age >= 18) {
    console.log("You are Allowed for given vote")
}
else {
    console.log("You are not Allowed for given vote")
}

let signal = "green"
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


//Switch Case of alternative if/else
let user = "Admin"
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


//loops - (initializer, condition, increment) for loop, do While, while

//for loop
for (let i=0; i<5; i++) {
    console.log(i);
}

//while (initialization, Condition, increment/decrement)
let i1 = 0;
while (i1 < 7) {
    console.log(i1);
    i1++;
}

let J = 0
while(J < 5) {
    console.log(J)
    J++
}

//Do while
let z = 0;
do {
    console.log("Hello World");
    z++;
} while(z < 4);

let K = 0
do {
    console.log("Hello World")
    K++
} while(K < 7)

//Ternary Operator / Ternary Condition
// condition ? TRUE:FALSE
//Ternary Operator/Ternary Condition: ?(? means True), :(: means False)
isloggedIn = true;
isloggedIn ? console.log("HOME PAGE"): console.log("LoginPage");

isloggedIn = false;
isloggedIn ? console.log("HOME PAGE"): console.log("LoginPage");

