//  'use strict'
 
//  let message = "Global";

// function greet() {
//     console.log(this.message );
// }

//  greet();


// name = 'Bob'
// var person = {
//     name: "John",
//     greet: function() {
//         console.log("Hello, " + this.name + "!");
//     }
// };

// var greetFunction = person.greet;
// greetFunction();
// person.greet();

// function showName() {
//     console.log(this.name);
// }

// var obj1 = { name: "Alice", showName: showName };
// var obj2 = { name: "Bob", showName: showName };

// obj1.showName();
// obj2.showName();

// function outer() {
//     inner();
//     function inner() {
//         console.log(this);
//     }
// }

// outer();

// var car = {
//     brand: "Toyota",
//     getModel: function() {
//         return this.brand + " Camry";
//     }
// };

// var getToyotaModel = car.getModel;
// console.log(getToyotaModel());


// function Person(name) {
//     this.name = name;
//     this.sayHello = function() {
//         console.log("Hello, " + this.name + "!");
//     };
// }

// var person1 = new Person("Alice");
// var person2 = new Person("Bob");

// person1.sayHello();
// person2.sayHello();
var person ={
    nam: 'John',
    sayName:function(){
            console.log(this.nam)
    }
}
var say = person.sayName;
say();





