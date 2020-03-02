let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
const numberWalls = 7;

//Static Environment: Not Changing During Update
function setup() {
    //Create Size of Canvas
    createCanvas(400, 400);
    for(let i = 0; i < numberWalls; i++) {
        //Randomize Coordinate for part 1 of ray
        let x1 = random(width);
        let y1 = random(height);
        //Randomize Coordinate for part 2 of ray
        let x2 = random(width); 
        let y2 = random(height); 
        //Create the wall
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    //Add four additional walls for the border of the canvas
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    //Create the Particle Object
    particle = new Particle();
}
//Updates by frame
function draw() {
    //Color Background: Black 
    background(0);

    //Display each wall
    for(let wall of walls) {
        wall.show();
    }
    //Particle moves around the canvas
    particle.update(noise(xoff) * width, noise(yoff) * height);
    //Display the Particle 
    particle.show();
    //Raycast nearby walls 
    particle.look(walls);
    //Particle Movement updates
    xoff += 0.01;
    yoff += 0.01; 
}