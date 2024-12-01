// // constructor or singleton object

const user = new Object(); // initializing obj via constructor

const tinderUser = {};
tinderUser.id = "ma";
tinderUser.rollNo = 23;

console.log(tinderUser);

const object = {
  // object in object
  object1: {
    firstName: "mayank",
    rollNo: 34,
    object2: {
      object3: {
        subject: "mathematics",
        object4: {
          loggedIn: true,
        },
      },
    },
  },
};
console.log(object.object1);

const obj1 = { 2: "mayank", 3: "shivaka" };
const obj2 = { 5: "venkatesh", 6: "kusha" };

const obj3 = { ...obj1, ...obj2 }; // both used to combine the obj
//also we use * const obj3 = object.assign(obj1,obj2)//assign

const user1 = [
  //object is array
  {},
  {
    email: "mau@22343",
  },
  {
    rollNo2: 45,
  },
];
console.log(user1[2].rollNo2);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //print all keys value
console.log(Object.values(tinderUser)); // print all values

//****************** Destructuring of object  **************************

const course = {
  courseNmae: "javasccript",
  price: 999,
  courseInstructor: "mayank",
};
// const{courseInstructor}=course
//console.log(courseInstructor)// value will be same
const { courseInstructor: instructor } = course; // destructing
console.log(instructor);

//****************** API ************************************
/*
->An API (Application Programming Interface) is like a waiter in a 
restaurant. When you want something (like data or functionality), you tell
 the waiter (the API), and they bring it to you from the kitchen (the server).
Key Points about APIs:
•	Communication: APIs help different software talk to each other.
•	Requests and Responses: You send a request to the API, and it sends back a response with the information you need.
•	Common Use: Many websites and apps use APIs to get data, like weather information or user profiles.
*/
 // random user & best json formate

//JSON -> JSON is the common formate used by api to communicate

//JSON FORMATE
const json = {
  name: "mayank",
  subject: "apijson",
};

// In array
const arrayJson = [
  {
    mani: "dshibd",
  },
];




///



 