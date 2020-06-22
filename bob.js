class Bob{
    constructor(x,y,width,height){
        var options={
            density:1.0,
            restitution:2.0
        }
        this.body=Bodies.circle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        fill("pink");
        var pos= this.body.position;
        ellipse(pos.x,pos.y,this.width,this.height);
        
      // this.body.position.x = mouseX;
      //  this.body.position.y = mouseY;
        
    }
    
}