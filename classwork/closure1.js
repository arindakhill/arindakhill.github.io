let x =1
function foo(){
    return function(z){
        console.log(x + z)
    }
}
 let res = 