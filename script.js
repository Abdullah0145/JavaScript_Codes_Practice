// variables & vlaues: to store info.
// to create variables: let,var,const (not representing datatypes)
// syntax:   
// keyword variablename=value
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

let phonename='redmi note 7'
let ram='3gb'
let speed=5000
let battery='5000mah'
let valuable=false
let price=5000.0

// const
/**
 *  similar to let.
 *  once value is initialize later cannot be changed.
 *  ex:  const pi=3.14
 *  syntax:  
 *  const variablename=value   
 */

let amazonPrice = 5000
let flipkartPrice = 6000
console.log("Prices of cost:"+ (amazonPrice < flipkartPrice))

console.log(amazonPrice++);   // print , ++
console.log(++amazonPrice);   // ++ ,print

/**
 *   console.log()
 *   console.warn()
 *   console.error()
 */
