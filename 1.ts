// topic--------constructors
class square{
    x: number;
    y :number;
// without constructor

    draw(){
        console.log("value of x is " + this.x + " value of y is " + this.y);
    }
}
let sq = new square();
sq.x = 1;
sq.y = 2;


// with constructor



class square1 {
    x1: number;
    y1: number;

    constructor(x1?:number,y1?:number){
        this.x1 = x1;
        this.y1 = y1
    }

    draw1(){
        console.log("value of x1 is " + this.x1 + " value of y1 is " + this.y1);
    }
}

let sq1 = new square1(10);
sq1.draw1()






