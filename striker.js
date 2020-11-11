class Striker {
    constructor(x, y, r) {
      var options = { 
        density: 1, 
        frictionAir: 0.005
        };
  
      this.r = r;
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
      
    }

    display() {
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        rotate(angle);
        ellipseMode(RADIANS);
        ellipse(0, 0,r,r);
        pop();
    }
}
  