// // constructor or singleton object

const user = new Object(); // initializing obj via constructor

const tinderUser = {};
tinderUser.id = "ma";
tinderUser.rollNo = 23;

//console.log(tinderUser)

// const object = { // object in object
//   object1: {
//     firstName: "mayank",
//     rollNo: 34,
//     object2: {
//       object3: {
//         subject: "mathematics",
//         object4: {
//           loggedIn: true,
//         },
//       },
//     },
//   },
// };
//console.log(object.object1);

const obj1 = { 2: "mayank", 3: "shivaka" };
const obj2 = { 5: "venkatesh", 6: "kusha" };

//const obj3={...obj1,...obj2} // both used to combine the obj
// also we use const obj3 = object.assign(obj1,obj2)

const user1 = [
  //object is array
  {},
  {
    email: "mau@22343",
  },
  {
    rollNo2:45,
  },
];
console.log(user1[2].rollNo2)

//**********************************************/

console.log(tinderUser)
console.log(Object.keys(tinderUser)); //print all keys value
console.log(Object.values(tinderUser)); // print all values
