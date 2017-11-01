let rows, x_space;
let cols, y_space

function setup() {
  createCanvas( windowWidth, windowHeight );
  frameRate( 10 );

  x_space = 75;
  rows = floor( width / x_space );
  y_space = 75
  cols = floor( height / y_space );
}

function draw() {
  background( random(256), random(256), random(256) );

  noStroke();

  let x = 1;
  let y = 1;
  while( x != 0 ){
    x = floor( random() * rows );
    y = floor( random() * cols );

    fill ( random(256), random(256), random(256) );
    ellipse( x*x_space, y*y_space, random(10, 75) );
  }
}
