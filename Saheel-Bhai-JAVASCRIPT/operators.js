// Operators eg:  
/*  
   +, -, *, %, /, **          (Arithmetic operators)
   &&, ||, !=                  (Logical operators )  
   <, >, <=, >=, ==, ===, <==, >== (Relational Operators/Comparision Operators)
   + - ++ --                  (Unary Operators)
   & | ^                      (Bit wise Operators)
   ()?:                       (Ternary Operator)
   =                          (Assignment operator)
*/


// +, -, *, %, /, **  (for Math operation /Arithmetic Operators) (for returns number value)
//let x = 10;  
//console.log(x+10);
//console.log(10+10);
//console.log(20);
//print on screen 20

// let a1 = 10;
// let b1 = 20;
// console.log(a1 + b1); //30
//console.log(a1 * b1); //200
//console.log(a1 - b1); //-10
//console.log(a1 / b1); //0.5
//console.log(a1 % b1); //10 
//console.log(a1 ** b1); // 10^20

// let c = 10+b1;
// console.log(c);
//let c = 10+20
//let c = 30
//c gets 30

// <, >, <=, >=, <==, >==, ==, ===, != (for checking /relational Operators) (for returns boolean value)
//let a = 20;
//let b = 5;
//console.log(a > b); //true
//given a = 20
//given b = 5
//a>b
//20>5
//a>b replace with true

//console.log(a < b); // false
//a = 20 
//b = 5
//a<b
//20<5
//a<b replace with false

//console.log(a==b); //false
//a = 20
//b = 5
//a==b
//20==5
//a==b replace with false

// let x1=10;  
// console.log(x1<10);
//given x1 = 10
//x1<10
//10<10
//x1<10 replace with false

// console.log(x1 != 100);
//given x1 = 10
//x1 != 100
//10 != 100
//x1 != 100 replace with True

// console.log(x1 >= 100);
//given x1 = 10
//x>=100
//10>=100
//x1 >= 100 replace with false


// && , ||   (when two or more condition need to be checked)
/** && */
// if(cgpa>=6.0 && cgpa<=7.5) {
//     console.log("B+");
// }

// if(cgpa>=7.6 && cgpa<=8.9) {
//     console.log("A");
// }

// if(cgpa>=9.0 && cgpa<=9.8) {
//     console.log("A+");
// }

/** || */
// let cost=4000;
// let brand='samsung';
// if(cost<=5000||brand=='redmi'){
//     console.log("purchased.");
// }

/* !=  */
// let price=5000;
// let brand='redmi';
// if(price<=5000||brand!='samsung'){
//     console.log('purchased.');
// }


// + - ++ --  (+ : to show +ve, - to show -ve)(++: increment --: decrement)(unary operators)
// unary operators( operators which take only 1 input)
// let a=+1;
// let b=-2;


// binary operators(operators which takes 2 inputs): arithmetic, relational and logical operators
// let a = 20;
// console.log(a+20);
//given a = 20
//a+20
//20+20
//a + 20 replace with 40

// let x=200;
//given x=200
//x>300
//200>300 
//false

// let x = 200;
// console.log(x<50);
//x<50
//200<50
//false

// let x = 200;
// console.log(x<=200);
//x<=500
//200<=500
//true

// let x = 200;
// console.log(x >= 100);
//x>=100
//200>=100
//true


/**  shop items :
 *   milk : 20 
 *   water : 10 
 *   cooldrink :15
 *   bread: 20
 *   biscuits : 10
 *   cocolate : 20
 */

/**
 *    user has 100/-
 */

// let user_balance=100;
// let user_selected_item=["milk","biscuits"];
// let total_cost=0;

// let a=1;
// a++; // a=a+1;
// a--; // a=a-1;
// ++a; 
// --a;

// a++;   // post increment
// ++a;   // pre increment
// a--;   // post decrement
// --a;  // pre decrement

// let a=1;
// let b=++a;
// console.log(b);

// i++;  i=i+1
// i--; i=i-1


//Ternary Operator : 

// let a=1;
// let b=(a==2)?2:3;

// let age=14;
// let result=(age>=18)?'allowed':'not allowed';

// let age=17;
// let isEligible=(age>=18)?'Allowed for Vote':'Not Allowed for Vote';
// console.log(isEligible);

// let citizen = "Indian";
// let isEligible1 =(citizen=="Indian")?'Allowed for Live In Indian':'Not Allowd for Live In Indian';
// console.log(isEligible1)

// let age = 18;
// let citizen = "Indin"
// let isEligible = (age>=50||citizen=="Indian")?'citizenship Indian':'Not citizenship Indian';
// console.log(isEligible);