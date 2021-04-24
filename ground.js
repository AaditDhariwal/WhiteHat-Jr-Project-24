class Ground{
    constructor(x,y,){
        var options={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.body=Bodies.rectangle(x,y,1000,10,options);
        this.width=1000;
        this.height=10;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
}
    
}