// for each loop:-

/* 
The `forEach` method in JavaScript is a powerful tool for iterating over
 arrays. It allows you to execute a provided function(call back) once for each element 
 in the array, making it a convenient way to handle array elements without the 
 need for traditional loops.
*/

const lang = ["cpp","ruby","python","javascript"]

lang.forEach(function(val){// it is callback fun so no name is alocated to fun & 
    // whatever the thing provided inti parameter of fun is goes through all element of array
    console.log(val)
})

function printMe(myarr){
    console.log(myarr)

}
 lang.forEach(printMe)

 //+++++++++++++++++++++++++++++++++++++++++

 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// here for each loop made very easy to excess obj inside the array


   
 