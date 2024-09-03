let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;

let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(0);
  circle(xbolinha, ybolinha, diametro);
  // xbolinha+= velocidadeXbolinha;
  ybolinha+=velocidadeYbolinha;

  if (xbolinha> width||
  xbolinha< 0 ){
 velocidadeXbolinha *= -1;
  }
   if (ybolinha > height||
    ybolinha< 0){
     velocidadeYbolinha *= -1;
   }
}