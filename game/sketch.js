function setup() {
  // Criando a janela
  createCanvas(windowWidth, windowHeight);
  
  // Taxa de atualização da tela
  frameRate(30);
  
  // Inicializa das cenas
  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();

  cenas = {
    jogo,
    telaInicial,
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();

  if (keyIsPressed) {
    jogo.keyIsPressed(key);
  }
}