function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name + '!');
  };
  
  var person = new Person('Alice', 25);
  
  console.dir(person);
  