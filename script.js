function setup() {
    createCanvas(900, 900);
  }
  function draw() {
    background("gray")
    fractalStairs(100);
  }


  function fractalStairs(squares){
    let numberOfSquares = squares;
    let step = 5; // the size
    let angle = TWO_PI / numberOfSquares;
    let size = step;
    let x = 450;
    let y = 450;

    for(let i = 0; i < numberOfSquares; i++){
      rectMode(CENTER);
      rect(x, y, size, size);
      translate(x,y);
      rotate(angle);
      translate(-x, -y);
      x += step * cos(angle);
      y += step * sin(angle);
    }
  }