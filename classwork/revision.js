
/*
For the given students array below, compute the average grade of the students who took cs303 course.
You're not allowed to use for, while, do...while, for..of, forEach loop
*/


const students = [
    { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
    { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
    { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
    { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
    { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
   ];

//q-96
//s-65
//k-90
//==83.666
//const chosen = students.filter(s=>s.courses.indexOf('cs303') !== -1);
//const chosen = students.filter(s=>s.courses.includes('cs303'))

const marks = chosen.map(s=>s.grade)
const sum = marks.reduce((accum,ele)=>accum+ele)
const noOfStudents =chosen.length
const average = sum/noOfStudents;
console.log(chosen)
console.log(marks)
console.log(sum)
console.log(noOfStudents)
console.log(average)