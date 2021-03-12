/*
Access modifiers

public---
--->used for variables,methods
--->it will be accessible internally and externally from outside of the class.


private---
--->used for variables,methods
--->cannot accesible from outside of the class.can be accessible only internally within the class.



protected---
--->used for variables,methods
---->can be accesible only internally within the class or any class that "extends" it but not externally.


*/


// public
// class student{
//   public age :number;
//    stdName : string;

// }

// let stud = new student();
// stud.age = 21;
// stud.stdName = 'krish';

// console.log(stud.age + " " +stud.stdName)

// -------------------------------------------------------------------------

// private

// class student1{
//     public studCode : number;
//     private studName : string;

//     constructor(code:number, name : string){
//         this.studCode = code;
//         this.studName = name;
//     }

//    public display(){
//     return("Student code is " +this.studCode + " and my name is " + this.studName);
//     }
// }

// let std1 = new student1(1,"july");
// console.log(std1.display());
// -----------------------------------------------------------------------

// protected

class student3{
    // public studeCode : number;
    protected studentName : string;

    constructor(name : string){
        this.studentName = name;
    }
}

class person extends student3{

    private department: string;
    constructor(name:string,department :string){
        super(name);
        this.department = department;
    }

    public fetch(){
        return ("my name is " + this.studentName + " and iam in " + this.department);
    }
}

let obj:person  = new person("ajay", "mech");
console.log(obj.fetch());