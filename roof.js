  
class Roof {
    constructor(x,y,width,height) {
    var options={
      isStatic:true
    }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
     display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
}
}