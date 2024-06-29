let x, y;
let xSpped, ySpeed;
let r, g, b;

function setup() {
  createCanvas(600, 400);
  textSize(48);
  //posições do texto
  x = width / 2;
  y = height / 2;

  //velocidade do texto
  xSpeed = 3;
  ySpeed = 2;

  //cores
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);

  //cor do texto
  fill(r, g, b);

  //desenho do texto
  text("Bardocha", x, y);

  //novas posições
  x += xSpeed;
  y += ySpeed;

  //mudar a direção quando bater na borda
  //mudar cor quando bater na borda
  if (
    x > width - textWidth("Bardocha") / 1 ||
    x < textWidth("VitorSilva") / 30
  ) {
    xSpeed *= -1;
    changeColor();
  }

  if (y > height - textAscent() / 30 || y < textAscent() / 1) {
    ySpeed *= -1;
    changeColor();
  }
}

//para mudar a cor do texto
function changeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}
