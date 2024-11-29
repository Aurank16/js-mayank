// ``//ways of declaration of function
// const sayMyName = function () {
//   console.log("may");
//   console.log("ank");
// };
// sayMyName();

// function sayMyName() {
//   console.log("may");
//   console.log("ank");
// }
// sayMyName();

// function myNe(myyy) {
//   return `${myyy} welcome to my vlog`;
// }
// const result1 = myNe("mayank");
// console.log(result1);
``;
// ***********************************************************************

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    // undefine case
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1) {
  // ...(rest operator) use to combine multiple values in array
  return num1;
}
console.log(calculateCartPrice(200, 300, 400));
//output:- [200,300,400]

// calling object in function
function handelObject(anyObject) {
  console.log(
    `my name is ${anyObject.usernmae} and email is ${anyObject.email}`
  );
}

handelObject({
  usernmae: "mayankkkk",
  email: "maynkkk@gmail.com",
});

// calling array in the function
function getSecondValue(myNewArray) {
  console.log(`sencod array is ${myNewArray[1]}`);
}
getSecondValue([200, 300, 400]);
