class Ray {
    //Create the Ray position
    constructor(pos, angle) {
        this.pos = pos; //Set the ray where the particle is located
        this.dir = p5.Vector.fromAngle(angle); //Draw around the Particle
    }

    //Draw the Ray
    show() {
        stroke(255); //Thickness of the ray
        push(); //Saves the drawing state of the ray
        translate(this.pos.x, this.pos.y); //Rays Change Position
        line(0, 0, this.dir.x * 10, this.dir.y * 10); //Draw Ray segment
        pop(); //Reset the drawing state of the ray
    }
    //Algorithm to sketch to wall
    cast(wall) {
        //Saves origin coordinate of wall
        const x1 = wall.a.x;
        const y1 = wall.a.y; 
        //Saves end coordinate of wall 
        const x2 = wall.b.x;
        const y2 = wall.b.y;
        //Saves origin of the ray
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        //Saves th end of the ray 
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y; 

        //Denominator value for intersection equation
        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        //Checks if the ray and wall are parallel, if so, return
        if(den == 0) {
            return; 
        }
        //Calculates the two line segments, ray and wall
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den; //Wall
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den; //Ray

        //If the Wall is between 0 and 1 && Ray is greater than 0
        if(t > 0 && t < 1 && u > 0) {
            //Saves the ray segment and return to particle 
            const pt = createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1); 
            return pt; 
        }
        //Continue to along to the next wall
        else {
            return; 
        }
    }
}