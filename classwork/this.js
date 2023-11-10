/*
function foo(name, brian){
    console.log(this, name, brian)
}

foo.call(3,"hills");
*/

//const x = { a: 1, b: 2, add() { return this.a + this.b } }

//console.log(x.add()); //3
/*
let z;
const y = {z:{
     a: 1, b: 2, add: () => { console.log(this)} }}

console.log(y.z.add()); //NaN.. i have tried to understand this but im still failing. why?
*/

let students ={
    group:"WAP",
    studentArray :['a','b','c'],
    meth(){
        this.studentArray.forEach((element) => {
             (function(x){
                console.log(this.group + " " + x)
            }
            ).call(students,element)
        })
         
        }
    }


students.meth();
