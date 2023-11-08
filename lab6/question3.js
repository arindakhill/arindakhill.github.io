//Exercise 3: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
function printNumber(from, to){
    let current = from;
    let timeInt = setInterval(function(){
        console.log(current);
        if(current == to){
            clearInterval(timeInt);
        }
current++;

    },1000);
}
printNumber(1,10);