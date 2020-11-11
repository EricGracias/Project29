class Ground {
    constructor() {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(750,690,1500,25,options);
     
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y,1500,25);
    }
}
