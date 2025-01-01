let score = null
 console.log(typeof score)
 console.log(typeof(score))
 // they both will give same o/p:- i.e number
 

let valueInNumber = Number(score)//whatever the value is will converted into number
 console.log(typeof  valueInNumber)//here score is "33"(string) bt then also it give num
 console.log( valueInNumber) // here it give whatever the real value of score is
 
 //"33"=> 33
 //"33abe"=>NuN(not a number) but the type number
 //true=>1;false=>0

 let  isLoggedIn = "1"
  let boolenIsLogged = Boolean(isLoggedIn)
  console.log(boolenIsLogged) 
  console.log(typeof(boolenIsLogged))
  
  // 1=> true ; 0=> false

   isLoggedIn = "mayank"
   boolenIsLogged = Boolean(isLoggedIn)
  console.log(boolenIsLogged) 
  console.log(typeof(boolenIsLogged))

  // mayank => true
  //""=> false
 
//   prefix & postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


