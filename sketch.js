function setup() {
    createCanvas(600, 400);
    background("rgb(190,18,190)");
  }
  
  function draw() {
    stroke("red")
    fill("yellow")
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35)
    }
  }
