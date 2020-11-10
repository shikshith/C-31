class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg= loadImage("sprites/smoke.png");
    //empty array for bird position
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    //console.log(trajectory)
    //reduce the smoke particles by limiting the position of the bird
    if(this.body.velocity.x>10 && this.body.position.x>200){
      //store the bird position
      var position=[this.body.position.x,this.body.position.y]
      //put the bird position in arrays of array=[[x1,y1],[x2,y2]...]
      this.trajectory.push(position)
    }
    // put the smoke image after the bird images
    //.trajectory.length=gives the number of elements in the array
    for (var i=0; i<this.trajectory.length;i=i+1){
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
      }
    }
}
