

/*
 Object Literals :-
-> An object literal is a simple way to create a single object using a set of
 key-value pairs enclosed in curly braces. This method is straightforward and 
 is typically used when you need a single instance of an object.
 */

 const JsUser = {
    name: "mayank",
    "my Name":"mayankkk",//sytx:console.log(jsUser["my Name"])coz of space
    age: 18,
    isLoggedIn: false,
    location: "varanasi",
    lastLoggedDay: ["saturday","friday"],
 }


    console.log(`my name is ${this.age}`)//we excess the obj by obj.what to excess

    JsUser.location = "jaipur"//to change the value
    console.log(JsUser.location)

    Object.freeze(JsUser)//to freeze the value 
    JsUser.location = "mumbai"//it will not change coz of freeze
   // console.log(jsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// this is used to show local obj
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
     
     


 
