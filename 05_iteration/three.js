// // For of




// for (variable of iterable) {
//     // code block to be executed
// // }

// // eg: 
// const cars = ["BMW", "Volvo", "Mini"];
// for (const car of cars) {
//     console.log(car);// BMW Volvo Mini
// }


// for (const  of object) {

    
// }


// ++++++++++++++++++++++++++++++++++++++++++++++

const greating = "hello world"
for (const great of greating) {
    console.log(`each char of  ${great}`)
    
}


// +++++++++++  MAP  +++++++++++++++++++++++++++++
//JavaScript Maps are a built-in object that allows you to store key-value pairs.
// Maps maintain the insertion order of their elements, meaning that when you iterate over a Map, the elements are returned in the order they were added.
//Unique Keys: Each key in a Map must be unique. If you attempt to add a key that already exists, the new value will overwrite the existing one



const map = new Map() 
map.set("Ind","india")
map.set("uk","united kingdom")
map.set("fr","frence")
map.set("Ind","india")// not print coz map only print unique value & ind is already used

console.log(map)
  
for (const [key, value] of map) {
    console.log(key,"-" , value)
    
}

// for of not gonna work on normal object with this method like:-
 /*const newObj = {
    game : "snake",
    level: "easy"

 }
    for (const [key ,  value] of newObj){
        console.log(key,value) 
        
    }

*/  //coz  newObj is not iterable










