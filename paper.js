class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(200,100,20,options);
       this.image = loadImage("paper.png");
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    Paper.velocityY = 8;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("blue");
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
    

    }


}