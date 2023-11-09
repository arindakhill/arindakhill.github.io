function foo(name, brian){
    console.log(this, name, brian)
}

foo.call(3,"hills");
