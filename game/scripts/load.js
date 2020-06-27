function preload() {
    // Carregamento do cartucho
    cartucho = loadJSON('cartucho/cartucho.json');

    // Carregamento das imagens
    imagemCenario = loadImage('imagens/cenario/floresta.png');

    // Personagem
    imagemBruxinha = loadImage('imagens/personagem/correndo.png');
    
    // Inimigos
    imagemGotinha = loadImage('imagens/inimigos/gotinha.png');
    imagemGotinhaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemTroll = loadImage('imagens/inimigos/troll.png');
    
    // Assets
    imagemTelaInicial = loadImage('imagens/cenario/telainicial.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemVida = loadImage('imagens/assets/coracao.png');

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
    // Carregamento dos sons
    trilha = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
  }