function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    background("darkred")
    fractalStairs(30);
  }


  function fractalStairs(squares){
    let numberOfSquares = squares;
    let step = 5; // the size
    let angle = TWO_PI / numberOfSquares;
    let size = step;
    let x = width/2;
    let y = height/2;

    for(let i = 0; i < numberOfSquares; i++){
      noFill();
      rectMode(CENTER);
      rect(x, y, size, size);
      translate(x,y);
      rotate(angle);
      translate(-x, -y);
      x += step * cos(angle);
      y += step * sin(angle);
      size += step;
    }
  }