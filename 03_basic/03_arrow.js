const user = {
    username: "mayank",
    price:999,

    welcomemessage : function(){
        console.log(`${this.username},welcome to this website`)
        console.log(this);// print the whole object
        

    }

}
user.welcomemessage()
user.username = "mayuri"
user.welcomemessage()

console.log(this);// print {} empty obj

/* When `console.log(this)` is executed in the global scope
(outside of any function), `this` refers to the global object. 
In a browser, this is typically the `window` object.*/

 function chai(){
    let username = "hitesh"
    console.log(this.username);// undefine coz this print in obj ! in fun
}
 
chai()

//+++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
