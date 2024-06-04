//3. Two types of Datatypes: (1) Primitive Datatype (2)Non-primitive Datatype

//  Non-prirmitive datatypes (a) Array [] (b) Object {}

// - (a) Array [] : ["hitesh", 'MD ABDULLAH', "Rohit", 'Kaif', 2, 5, 76.8, false, "Arif"]

/**
 * 
 * given array -> [11, 21, 31, 41, 51]
 * indexes/pos -> [0, 1, 2, 3, 4] //last element index = arr.length - 1
 * 
*/

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

let a = [1, 2, 3, 4, "sanket", false, 56.7];
console.log(a); //[1, 2, 3, 4, 'sanket', false, 56.7]

let b = new Array()
console.log(b) //[] empty array

let c = new Array(5)
console.log(c) //[ <5 empty items> ]

let d = new Array("abc", "def", "ghi")
console.log(d) //[ 'abc', 'def', 'ghi']

console.log(a[0]); //1

console.log(a[5]); //false
a[5] = 6.3;
console.log(a); //[1, 2, 3, 4, 'sanket', 6.3, 56.7]

console.log(a[15]); //undefined