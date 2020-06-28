function preload() {
    // Carregamento do cartucho
    cartucho = loadJSON('cartucho/cartucho.json');

    // Carregamento das imagens
    imagemCenario = loadImage('imagens/cenario/floresta.png');

    // Carregamento das imagens de pântano
    imagemPantanoAgua = loadImage('imagens/cenario/pantano/agua.png');
    imagemPantanoChao = loadImage('imagens/cenario/pantano/chao.png');
    imagemPantanoCeu = loadImage('imagens/cenario/pantano/ceu.png');
    imagemPantanoArvores1 = loadImage('imagens/cenario/pantano/arvores1.png');
    imagemPantanoArvores2 = loadImage('imagens/cenario/pantano/arvores2.png');
    imagemPantanoArvores3 = loadImage('imagens/cenario/pantano/arvores3.png');
    imagemPantanoArvores4 = loadImage('imagens/cenario/pantano/arvores4.png');

    // Personagens
    imagemBruxinha = loadImage('imagens/personagem/correndo.png');
    imagemJovemNerd = loadImage('imagens/personagem/jovem-nerd.png');
    imagemJovemNerdDano = loadImage('imagens/personagem/jovem-nerd-dano.png');
    imagemAzaghal = loadImage('imagens/personagem/azaghal.png');
    imagemAzaghalDano = loadImage('imagens/personagem/azaghal-dano.png');
    imagemArtimus = loadImage('imagens/personagem/artimus.png');
    
    // Avatares
    imagemAvatarJovemNerd = loadImage('imagens/assets/jovem-nerd-avatar.png');
    imagemAvatarAzaghal = loadImage('imagens/assets/azaghal-avatar.png');

    // Inimigos
    imagemGotinha = loadImage('imagens/inimigos/gotinha.png');
    imagemGotinhaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemTroll = loadImage('imagens/inimigos/troll.png');
    imagemBeholderAndando = loadImage('imagens/inimigos/beholder-andando.png');
    
    // Assets
    imagemTelaInicial = loadImage('imagens/cenario/telainicial.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemVida = loadImage('imagens/assets/coracao.png');

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
    // Carregamento dos sons
    trilha = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
  }