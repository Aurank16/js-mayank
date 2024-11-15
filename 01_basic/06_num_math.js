// ++++++++++++++++++++++NUMBER++++++++++++++++++++++++++++


const score = 400
const newscore = new  Number(score)
console.log(newscore)  // simply provide object

console.log(newscore.toString().length)//convert into srting
console.log(newscore.toFixed(1))//to be more preision

const othervalue = 123.6547
console.log(othervalue.toPrecision(3))/*Returns a string containing a number
 represented either in exponential or  fixed-point notation with a specified
  number of digits.*/

  console.log(othervalue.toPrecision(4))//123.7

// ++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++

console.log(Math) // object which consist various function

console.log(Math.abs(-4))//just change -ve value into +ve

console.log(Math.round(4.6))// just do roundoff

console.log(Math.ceil(4.1))//top value i.e 5 in this case
console.log(Math.floor(4.9))//lowest value i.e 4 in this case

console.log(Math.max(6,7,8,9))// gives maximum value
// similarly fir Math.min

console.log(Math.random())
/*have range between 0-1(decimal) and each time it 
give random value*/

console.log((Math.random()*10)+1)
/* we multiply by 10 coz getting absulute value
and add 1 coz avoiding 0 value.*/

console.log(Math.floor(Math.random()*10)+1)// math.floor coz avoid decimal value

const max =20
const min =10
// for getting specific required range we do initialize max&min value

console.log(Math.floor(Math.random()*(max-min)+1)+min)
/* we do multiply by (max-min) to specify range & +1 to avoid 0 value
but it again similar to above case so we add another "min" to   




