let callbacks = [];
for (var i = 0; i <= 3; i++) { //what if use var?

callbacks[i] = function(){return i * 2};

} 

console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());
console.log(typeof callbacks);
