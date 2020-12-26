class Block{
    constuctor(x,y,width,height){
    var options={
    
    restitution:0.4
    
    }
    
    this.visiblity=225
    this.body=bodies.rectangle(x,y,width,height)
    this.width=width;
    this.height=height;
    World.add(world,body)
    
    }
    
    display(){
    
    if(this.body.speed<3)
    var angle=this.body.angle
    var pos=thid.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectmode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
    
    }
    
    
    
    score(){
        if(this.Visiblity<0&&this.Visiblity>-1005){
        score++
        }
        else
         {
         
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            pop();
            }
    }
    }