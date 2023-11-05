function myFirst(name){
    return name + 5;
}

console.log(myFirst(6))

const newFunc = function(name){
    return name + 7;
}

console.log(newFunc(6))


const factorial = function fac(n){
    return n<2? 1: n*fac(n-1)
}

console.log(factorial(5))