const students = [
    { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
    { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
    { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
    { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
    { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
   ];


let sum = students
.filter(stu => stu.courses.includes('cs303'))
.map(stu => stu.grade)
.reduce((sum, current,index, array) => sum + current / array.length, 0);
console.log(sum)
 
/*
let len = 0;

 
let result2 = students.filter(stu => stu.courses.includes('cs303'))
 
.map(stu => stu.grade)
 
.reduce((sum, current, index, array) => {
 
    len = array.length;
 
    return sum + current;
 
});
console.log(result2 / len);
*/