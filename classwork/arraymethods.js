//concat() joins two arrays and returns a new array.
var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]

//join(deliminator = ',') joins all elements of an array into a string.
var myArray = ["Wind", "Rain", "Fire"];
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"
//console.log(list);

//reverse() transposes the elements of an array: the first array element becomes the last and the last becomes the first.
var myArray = new Array(10, "2", "3");
myArray.reverse();
//console.log(myArray);
myArray.sort();
// transposes the array so that myArray = [ "3", "2", "1" ]
//console.log(myArray);

//slice(start_index, upto_index) extracts a section of an array and returns a new array.
var myArray = new Array("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4);
//console.log(myArray);

//sort() sorts the elements of an array.
var myArray = new Array("Wind", "Rain", "fire");
myArray.sort();
//console.log(myArray);

//splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

var myArray = new Array("1", "2", "3", "4", "5","6","7");
myArray.splice(2, 3, "a", "b", "c", "d","e");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
//console.log(myArray);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
