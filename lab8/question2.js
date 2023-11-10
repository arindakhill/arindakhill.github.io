function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  }
  
  Student.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
  };
  
  Student.prototype.computeAverage = function() {
    var sum = this.grades.reduce(function(acc, grade) {
      return acc + grade;
    }, 0);
    return sum / this.grades.length;
  };
  
  var student1 = new Student("John", "Doe");
student1.inputNewGrade(90);
student1.inputNewGrade(95);
student1.inputNewGrade(85);

var student2 = new Student("Jane", "Smith");
student2.inputNewGrade(80);
student2.inputNewGrade(70);
student2.inputNewGrade(75);

console.log(student1.computeAverage()); // Should output the average of student1's grades
console.log(student2.computeAverage()); // Should output the average of student2's grades

