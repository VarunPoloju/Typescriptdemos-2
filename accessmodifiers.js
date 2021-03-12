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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var student3 = /** @class */ (function () {
    function student3(name) {
        this.studentName = name;
    }
    return student3;
}());
var person = /** @class */ (function (_super) {
    __extends(person, _super);
    function person(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    person.prototype.fetch = function () {
        return ("my name is " + this.studentName + " and iam in " + this.department);
    };
    return person;
}(student3));
var obj = new person("ajay", "mech");
console.log(obj.fetch());
