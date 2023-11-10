/*
Our Group: John
Our Group: Pete
Our Group: Alice
*/

 /*
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();
*/

//solution 1--- Using arrow function
/*

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach( (student) =>{

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();
*/

//solution 2--- using self pattern
//'use strict'
/*
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],
    showList : function () {

            let self = this;
        this.students.forEach( function(student) {
    
            console.log(self.title + ": " + student);
    
        });
    
    }
    
};

group.showList();
*/


//solution 3--- using bind
//'use strict'

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],
    showList : function () {

       
        this.students.forEach( function(student) {
    
            console.log(this.title + ": " + student);
    
        }.bind(this));
    
    }
    
};

group.showList();


//4. call + wrapper
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log(this.title + ": " + student);
            }).call(this, stu);
        });
    }
};
group.showList();

// 5. apply + wrapper
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log(this.title + ": " + student);
            }).apply(this, [stu]);
        });
    }
};
group.showList();



