let person ={
  nam:'hills',
   sayHello(gwe) {
    console.log("Hello! " + this.nam +" "+ gwe);
  }
}


  
  // Set a timeout to call sayHello after 2 seconds
  let timeoutId = setTimeout(
    function(kiki){
    person.sayHello(kiki)
  }, 0,"otyo");
  