// function f(x) {
//     console.log("x: " + x);
//     } 
//     f();
//     f(1);
//     f(2, 3);
function log() {
    console.log("No Arguments");
    }
    function log(x) {
    console.log("1 Argument: " + x);
    }
    function log(x, y) {
    console.log("2 Arguments: " + x + ", " + y);
    }
    log();
    log(5);
    log(6, 7);