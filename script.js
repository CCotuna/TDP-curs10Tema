function setup() {
    createCanvas(900, 900);
  }
  function draw() {
    translate(width / 2, height );
    fractalStairs();
  }


  function fractalStairs(){
    let numberOfSquares = 100;
    let step = 5; // the size
    let angle = TWO_PI / numberOfSquares;
    let size = step;
    let x = 450;
    let y = 450;
    
  }