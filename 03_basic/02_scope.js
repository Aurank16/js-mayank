function one(){
    username = "mayank"
   function two() {
    age = 14
    console.log(username)

    }
    //console.log(age)
    two()// print hoga kuki cote mein bda ho jata hai
}
one()// not print coz bade scope mein chota nhi print hota

// consclusion:- child can excess parent bt parent can't excess child

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // not coz of out of scope
    }

// console.log(username)// same issue

// +++++++++++++++++++++++ INTERSTING +++++++++++++++++++++++++++++
 
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) /* error will be shown coz we declare function into variable
(hoisting concept)*/
const addTwo = function(num){
    return num + 2
}

