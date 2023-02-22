

class student {
    name;

    profession = 'Web developer';

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    doIt(input) {
        console.log(`Do ${input} everyday at 2am`);
    };

    location;
};


const newStudent = new student('rakib', 'feni');
console.log(newStudent);
// newStudent.doIt('nothing');
// console.log(newStudent.doIt('nothing'));