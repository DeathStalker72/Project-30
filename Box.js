class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':10
         
      }
      this.visibilty=225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<6){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibilty = this.visibilty-5;
        pop();
      }
    }
}