(function() {
    var privateVar = 'I am private';
    console.log(privateVar); // Works fine
})();
console.log(privateVar); // ReferenceError: privateVar is not defined
