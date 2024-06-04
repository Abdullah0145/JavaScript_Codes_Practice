//4. Operators : (a) Assignment Operator, (b) Arithemetic Operator, (c) Relational Operators or Comparision Operator, (4) Bitwise Operator, (5) logical Operator, (6) Conditional Operator, etc.)

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

// increment Operators: (x++)
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


// - (c) Comparision Operators / Relational Operators: (==, ===, !=, !==, >, >=, <, <=)
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

// - (d) logical Operator (&&, ||, !=)
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