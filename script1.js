//PWSkills
console.log(this) //Empty Parenteses {} (pre-defined keyword)

//Pre-defined keyword / variables are: var, let, const
//syntax: keyword variablename = value;

//Primitive data types: (number, string, boolean, null, undefined)
//(1) numbers: 2, 8, 10, 24, 4.5, 9.1, 22.31, -1.00, -3.3, -22.89, 3.14....etc.
const n = 6 //Initialization of a variable
console.log(n) //6
console.log(typeof n) //number

var a = 2
console.log(a)
console.log(typeof a)

var b = 10 
console.log(b) 
console.log(typeof b)

const pi = 3.14 //(Accessing of a variable,but not change the value because it's a constant value here)
console.log(pi) //3.14
console.log(typeof pi) //number

let c = 50
console.log(c)
console.log(typeof c)

const u = 7
console.log(u)
console.log(typeof u)

const d = 5
console.log(d)
console.log(typeof d)

const m = 12
console.log(m + b)
console.log(typeof m)

//(2) string: "PW Skills", 'Md Abdullah', "APNA COLLEGE", 'Full Stack Academy'...etc.  
console.log("PW SKIlls") //PW SKILLS
console.log(typeof "PW SKILLS") //string

console.log('Md Abdullah')
console.log(typeof 'Md Abdullah')

console.log("APNA COLLEGE") 
console.log(typeof "APNA COLLEGE")

console.log('Full Stack Academy')
console.log(typeof 'Full Stack Academy')

console.log("Hello World")
console.log(typeof "Hello World")

//(3) boolean: true, false

//(4) null: It is a consider as Empty('') or false (Null means nothing, not zero (0);

//(5) Undefined:
var x //Declartion of variable
console.log(x) //undefined
console.log(typeof x) //undefined

let y
console.log(y)
console.log(typeof y)

let k
console.log(k)
console.log(typeof k)

//Non-Primitive Datatypes (Multi values): Array, Object, function

//(1) Array: []  ["A", "B", "C", "D", "E", "F","G"]
let name1 = "Hitesh Choudhary"
let name2 = "Md Abdullah"
let name3 = 'kaif'
let name4 = 'Rohit'
let num = 4
let bool = false
let names = ["Hitesh Choudhary", "Md Abdullah", 'kaif', 'Rohit', 4, false]
console.log(names)

//(2) Object: {} 
let myName = "MD"
myName = "MD Abdullah"
console.log(myName)

let cityName = "California"
cityName = "California In USA"
console.log(cityName)

const countryName = "India"
console.log(countryName)

//(3) function: (){}

//Pre-defined keyword / variables are: var, let, const

//Operators: (Assignment Operator, Arithemetic Operator, Comparision Operator, logical Operator, Conditional Operator, etc.)

//(1) Assignment Operators: (=, >, < )
let highScore = 300
console.log(highScore)

let pwSkillsCoursePrice = 3500
pwSkillsCoursePrice =2000
console.log(pwSkillsCoursePrice)

pwSkillsCoursePrice =2500
console.log(pwSkillsCoursePrice)

let userName = "Abdullah"
console.log("Abdullah")

//Arithmetic Operators : (+, -, *, /, %, **, ++, --, +a, -a)
let pwCoursePrice = 2000
let gstOnCoursePrice = 36
let finalPurchaseAmount = pwCoursePrice + gstOnCoursePrice
console.log("Final Amount to be paid", finalPurchaseAmount)

let pwDsaCourse = 1500
console.log("Final Price of DSA Course", pwDsaCourse + gstOnCoursePrice)
console.log("Final Price of DSA Course", pwDsaCourse - gstOnCoursePrice)
console.log("Final Price of DSA Course", pwDsaCourse * gstOnCoursePrice)
console.log("Final Price of DSA Course", pwDsaCourse / gstOnCoursePrice)
console.log("Final Price of DSA Course", pwDsaCourse % gstOnCoursePrice)
console.log("Final Price of DSA Course", pwDsaCourse ** gstOnCoursePrice)

console.log("Answer is", 5 + 3)
console.log("Answer is", 5 - 3)
console.log("Answer is", 5 * 3)
console.log("Answer is", 5 / 3)
console.log("Answer is", 5 % 3)
console.log("Answer is", 5 ** 3)

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
let i = 3;
i1 = +i;
console.log(i1)

//Negation Operators: (-a)
let j = 3;
j1 = -j;
console.log(j1)

//Comparison Operators: (==, ===, !=, !==, >, <, >=, <=)
let hiteshHighScore = 200
let rajuHighScore = 300
console.log(hiteshHighScore == rajuHighScore)
console.log(hiteshHighScore === rajuHighScore)
console.log(hiteshHighScore > rajuHighScore)
console.log(hiteshHighScore < rajuHighScore)
console.log(hiteshHighScore >= rajuHighScore)
console.log(hiteshHighScore <= rajuHighScore)
console.log(hiteshHighScore != rajuHighScore)
console.log(hiteshHighScore !== rajuHighScore)

//Logical Operators: (&&, ||, !)
//AND Operator: (&&)
let value1 = true
let value2 = false
let value3 = true
let value4 = false
console.log(value1 && value3)
console.log(value1 && value2)
console.log(value2 && value3)
console.log(value2 && value4)

let isLoggedIn = true
let cardDetails = true
console.log(isLoggedIn && cardDetails)

//OR Operator: (||)
let gitHubloggedIn = true
let discordAccount = false
let gmailAccount = true
let emailAccount = false
console.log(gitHubloggedIn || gmailAccount)
console.log(gitHubloggedIn || discordAccount)
console.log(gmailAccount || emailAccount)
console.log(discordAccount || emailAccount)

//Conditions/Decisions: (if, else if, else)
let age = 17
if (age>=18) {
    console.log("You are allowed")
}
else {
    console.log("You are not Allowed")
}

let signal = "yellow"
if (signal == "red") {
    console.log("Red => STOP")
}
else if (signal == "yellow") {
    console.log("Yellow => Go Slow")
}
else if (signal == "green") {
    console.log("Green => Go Fast")
}
else {
    console.log("Invalid")
}
//Switch Case of alternative if/else
let user = "Admin"
switch(user){
    case "Admin":
        console.log("He is Admin")
        break
    case "Student":
        console.log("He is Student")
        break
    case "Mentor":
    console.log("He is Mentor")
        break
default:
    console.log("I am default")        
}

//loops:(initializer, condition, increment) do while, while, for
for (let i=0; i<5; i++) {
    console.log(i)
}

for (let i=0; i<10; i++) {
    console.log(i)
}

//while (initialization, Condition, increment/decrement)
let J = 0
while(J < 5) {
    console.log(J)
    J++
}

//do while
let K = 0
do {
    console.log("Hello World")
    K++
} while(K < 7)

//Ternary Operator/Ternary Condition: ?(? means True), :(: means False)
isLoggedIn = false
isLoggedIn ? console.log("HOME PAGE") : console.log("LoginPage")