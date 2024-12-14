 // ARRAY

const myArray = [3,5,6,8,9]

const array = [3,5,6,"mayank","unddd"]
/*unlike other language in array in js can consist multiple datatype &
also have flexible size 
*/

// one another way of intializing array

const array2= new Array(3,2,9,6,4)//coz array is treated as obj

console.log(myArray[2])

// METHOD OF ARRAY

myArray.push(7)
console.log(myArray) // simply add value

myArray.pop() // simply delete the last value
console.log(myArray)

 console.log(myArray.includes(6)) // true (coz it exist)
 console.log(myArray.indexOf(6)) // 2 (coz it is on 2nd index)


 const newArray = myArray.join() // convert arry into string
 console.log(myArray) // same array output
 console.log(newArray)// same output but in sting form
 console.log(typeof newArray)

//  slice and splice

// slice:-

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Extracting elements from index 1 to 3 (exclusive)
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['Orange', 'Lemon']

// Extracting from index 2 to the end
const tropical = fruits.slice(2);
console.log(tropical); // Output: ['Lemon', 'Apple', 'Mango']

// Using negative indices
const lastTwo = fruits.slice(-2);
console.log(lastTwo); // Output: ['Apple', 'Mango']

/*
Key Points :-
The original array remains unchanged.
Negative indices can be used to count from the end of the array.
*/

//splice :-