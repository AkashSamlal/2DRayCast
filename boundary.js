class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1,y1); //create coordinate one
        this.b = createVector(x2,y2); //create coordinate two
    }
    //Draw the Wall
    show() {
        stroke(250); //thickness of the wall
        //Draw a line segment from coordinate one to coordinate two 
        line(this.a.x, this.a.y, this.b.x, this.b.y); 
    }
}