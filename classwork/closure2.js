function createCounter() {
    let count = 0;  // This is the variable in the lexical scope of the createCounter function

    // The increment function forms a closure here
    function increment() {
        count = count + 1;  // increment can access the 'count' variable of createCounter
        console.log(count);
    }

    return increment;  // Return the inner function, thereby exposing it to the outer scope
}

// When we call createCounter, we get back the increment function
const myCounter = createCounter();


createCounter()();// Logs: 1
createCounter()();// Logs: 1
//createCounter;
//createCounter;

//myCounter ; // Logs: 2
//myCounter;  // Logs: 3

// Each call to myCounter increments the count and retains its state between calls
