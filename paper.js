class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(200,100,20,options);

    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    Paper.velocityY = 8;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0,0,20,20);
    pop();
    
    

    }


}