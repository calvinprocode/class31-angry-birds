class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img=loadImage("sprites/smoke.png");

    //an array to collect every position of the bird as it flies to hit the pig
    this.trajectory = [];//intially creating an empty array

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log (this.body.position.x)//200 - increase to more than 200
    console.log (this.body.velocity.x)// velocity also increases as bird is released
    //if(condition){//do this}

    //add the bird position only if it is launched and yet to hit the pig
    if(this.body.position.x>200 && this.body.velocity.x>2){ 
    //storing the position of the bird in an array called as position
    var position = [this.body.position.x, this.body.position.y];//[x,y]
    this.trajectory.push(position); // trajectory[[x,y],[x,y],[x,y].....................]
    }

    for(var i=0; i<this.trajectory.length; i++){ // i++ means, increase i by 1 everytime
       image(this.img,this.trajectory[i][0], this.trajectory[i][1]);

  }
  
}
}
