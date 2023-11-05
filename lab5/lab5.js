/*
Instructions
1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.

2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.

3. Implement an arrow function with feature below:

concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
*/

//Solution 1
function sum(array){
let sum = array.filter(a => a > 20).reduce((accum, ele) => accum + ele, 0)

return sum;
}

//test 1
let array = [1,2,3,4,5,50,50,70];
console.log(sum(array));


//Solution 2
const getNewArray = function(array){
    return array.filter(str=>str.length >= 5 && str.includes('a'))
    
}
//test 2
let stringArray = ['arinda','hillary', 'eth']
console.log(getNewArray(stringArray));



//Question 3

const conc = (string, ...arrays) => {
    let result = string.split('');
       
    arrays.forEach(array => {
        if (Array.isArray(array)) {
          // Concatenate each array to the result
          result = result.concat(array);
        }
      });


    return result;
  };
  
  // test 3:
  console.log(conc('hi', [1,2,3], ['Hello','world'])); 
  // Expected output: ['h', 'i', 1, 2, 3, 'Hello', 'world']
  