let a = [1, 2, 3, 4, "sanket", false, 56.7];
console.log(a); //[1, 2, 3, 4, 'sanket', false, 56.7]

let b = new Array()
console.log(b) //[] empty array

let c = new Array(5)
console.log(c) //[ <5 empty items> ]

let d = new Array("abc", "def", "ghi")
console.log(d) //[ 'abc', 'def', 'ghi']

/**
 * 
 * given array -> [11, 21, 31, 41, 51]
 * indexes/pos -> [0, 1, 2, 3, 4] //last element index = arr.length - 1
 * 
 */

console.log(a[0]); //1

console.log(a[5]); //false
a[5] = 6.3;
console.log(a); //[1, 2, 3, 4, 'sanket', 6.3, 56.7]

console.log(a[15]); //undefined