function setup() {
    createCanvas(900, 600);
  }
  function draw() {
    angle = PI / 4;
    translate(width / 2, height );
    treeBranch(100, 1);
  }
  
  function treeBranch(length, thickness) {
    if (length > 60) {
      stroke("green");
      fill("red");
    } else if (length > 30) {
      stroke("gray");
      fill("white");
    } else {
      stroke("black");
      fill("green");
    }
    strokeWeight(thickness * 0.5);
    // line(0, 0, 0, -length);
    rect(0, length, length);
    translate(0, -length);
    if (length > 10) {
      //partea dreapta
      push();
      rotate(angle);
      treeBranch(length * 0.75, thickness);
      pop();
      //partea stanga
      push();
      rotate(-angle);
      treeBranch(length * 0.75, thickness);
      pop();
    }
  }