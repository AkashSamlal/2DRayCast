class Particle {
    constructor() {
        //Particle Spawns at half of screen everytime
        this.pos = createVector(width/2, height/2);
        //Array for each ray segment around the particle
        this.rays = [];
        for(let a = 0; a < 360; a+=1) {
            this.rays.push(new Ray(this.pos, radians(a)));
         }
    }
    //Updates Particle Movement
    update(x, y) {
        this.pos.set(x, y); 
    }
    //Particle Collision detection
    look(walls) {
        for(let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i]; //Check Each Ray
            let closest = null; //Temporary Variable to check closest distance of wall
            let record = Infinity; //The Closest Variable

            for(let wall of walls) {
                const pt = ray.cast(wall);
                //If there's a intersection of the ray to the wall
                if(pt) {
                    //Get the distance of that intersection
                    const d = p5.Vector.dist(this.pos, pt);
                    //If the distance is smaller than the known smallest value, assign it as the smallest value
                    if(d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            //Draw the closest ray 
            if(closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }
    //Draw the Particle and Rays 
    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for(let ray of this.rays) {
            ray.show();
        }
    }
}