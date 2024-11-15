const name = "  mayank"
const  repoCount = 10
console.log(repoCount +" "+ name + "  maya")/* this will give o/p but not
not good formate for writing code */

// here "STRING  INTERPULATION" came into play:-
// ->${} (formate)  and written inti (` `)i.e backtick

console.log(`hey my name is ${name} and my repoCount is ${repoCount}`)

// this is the good way of murgging two or more sting.

/*another way of declaring string in the form of object or another formate
of declaring stiring */
 
const myName = new String('mayank') //string is act as object

console.log(myName)// o/p:-[string:mayank]act like key:value

// let see osme of object of string

console.log(myName.length) // o/p-> 6(mayank)

console.log(myName[0])// o/p-> m

console.log(myName.__proto__)//0/p-> {}(gives object)

// console.log(myName.indexOf('t'))

const newName = myName.substring(0,4) 
console.log(newName) // output-> maya(it divide the substring)

const anotherName = myName.slice(-5,4) 
console.log(anotherName)

const noAnother = myName
console.log(noAnother.trim()) /// remove the unnecessay spaces

const url = "http://maynkkkrt.com/mayank%21tiwari"
console.log(url.replace('%21','-')) // simply repacle

console.log(url.includes('mayank')) // true(it check wheather given is present or not)



 



