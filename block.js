class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
        this.visibility = 225;
        
      }
      display(){
        var pos = this.body.position
        if(this.body.speed<3){
        var angle = this.body.angle;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);
      }
      else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);
        pop();
      }
      }
}
