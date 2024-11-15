/* PREMITIIVE DATATYPE :-
->They represent single values and are predefined by the programming language.

7 types are there:-
(number,boolean,string,null,undefine,symbol,bigInt)

eg; */

const score = 100 // num
const isLoggedIn = false // boolean
const scoreValue = 100.4 // num 
let roll //undefine
 
console.log(roll)// o/p-> undefine

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId)// o/p- false
/*
Though the value of id and anotherId is same but o/p is false coz of symbol
datatype which state uniqness .
*/


/* NON PREMITIVE :-

-> Non-primitive data types, also known as reference types, are more complex 
and can hold multiple values or a collection of values. They are defined by 
the user and can be composed of primitive types.
*/
 //-> (Array,object,function)

 //eg:-

 let  name=["mayank","hitesh","kushagra"]//array

 let myObj = {
    // key:value
    age:18
    
 }
    
 const myFunction = function(){
    console.log("hello")
 }
  
 console.log(typeof name)







