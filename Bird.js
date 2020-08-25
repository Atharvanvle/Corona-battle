class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,55,55);
    this.image = loadImage("sprites/sanitizer.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
