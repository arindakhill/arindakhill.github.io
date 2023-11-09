/*
'use strict'
let user = {
    firstName: "John",
    sayHi: function() {
        let x = function(){
      console.log(`Hello, ${this.firstName}!`);
    //  console.dir(this)
         }
         x();
    }
};
user.sayHi()
*/
 // setTimeout(user.sayHi, 1000); // Hello, undefined!
/*
 'use strict'
let user = {
    firstName: "John",
    sayHi() {
        let x = ()=>{
      console.log(`Hello, ${this.firstName}!`);
      console.dir(this)
         }
         x();
    }
};
user.sayHi()
*/
let user = {
    firstName: "John",
};

function func(){
    console.log(this.firstName);
}

//user.second = func;
//console.log(user)
//funUser();
let funcUser = func.bind(user);
console.log(funcUser)
//funcUser();


let x = 1; 
function foo() {
let y = 0;
     let fun = function(z) { 
        return x + (++y) + z; 
    }
return fun;
     } 
     let f = foo(); // f is clourse console.dir(f); WHICH ONE IS A FREE VARIABLE AND WHY
    
     console.log( f(3));
     console.log(f(3));