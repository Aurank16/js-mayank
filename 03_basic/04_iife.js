// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let user1  = "mayank";
 
// (()=>{
//     const user1 = "halwa"
//     console.log(user1);
//  })()


// console.log(user1);
