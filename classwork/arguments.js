// function findMax() {
//     var i;
//     var max = -Infinity;
//     for (i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//     max = arguments[i];
//     }
//     }
//     return max;
//     }
//     var max1 = findMax(1, 123, 500, 115, 66, 88);
//     var max2 = findMax(3, 6, 8);
//     console.log("max1", max1)
//     console.log("max2",max2)

// const numbers = [10, 20];
// let [a, b] = numbers;
// console.log(a);
// console.log(b);

const [first, , third] = ["foo", "bar", "baz"];
console.log(first);
console.log(third);