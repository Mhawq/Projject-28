class Stone {
    constructor(x,y,radius){
      var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.x = x;
    this.y = y;
    this.radius = radius
    this.body = Bodies.circle(x,y,radius,options)
   // this.width = width
   // this.height = height
    this.image = loadImage("Plucking Mangoes/stone.png")
    World.add(world,this.body)
  }
    display() {
   //   var pos = this.body.position
      push()
      translate(this.body.position.x, this.body.position.y)
      imageMode(CENTER)
      ellipseMode(CENTER)
      image(this.image,0,0,this.radius*2,this.radius*2)
      pop()
    }
  }
  