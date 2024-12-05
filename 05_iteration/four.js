// for in loop:-

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift for apple"
}
for (const key in myObj) {
    console.log(`${key} = ${myObj.key}`)
}

// let's see in array

const lang = ['cpp','python','ruby','swift']
for (const key in lang) {
    //  console.log(key) output: 0,1,2,3 which is key in this case
     console.log(lang[key]) // output   :-
     //  cpp
//      python
//      ruby
//      swift
// 
}




