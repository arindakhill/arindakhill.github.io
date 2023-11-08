function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3,4];
 // console.log(sum(...numbers)); // Output: 6
  
  let fruits = ['apple', 'banana'];
 // let age = 30

let moreFruits = ['orange', 'grape', ...fruits, age];
var age = 30
console.log(moreFruits); // Output: ['orange', 'grape', 'apple', 'banana']


let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
let clonedObj = { obj1 };
let mergedObj = { ...obj1, ...obj2 };
// Note: The property 'foo' is overwritten by the property 'foo' from obj2
// console.log(obj1);
// console.log(obj2);
// console.log(clonedObj);
// console.log(mergedObj);

let chars = [..."Hello"];
//console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4]

let person = { name: 'John', age: 25 };
let job = { occupation: 'Developer', age: 30 };
let profile = { ...person, ...job };
//console.log(profile); // Output: { name: 'John', age: 30, occupation: 'Developer' }
