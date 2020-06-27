class Inimigo extends Animacao {
  
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = velocidade;
    this.x = width;
    this.pontuou = false;
  }
  
  move() {
    this.x -= this.velocidade;
  }

  pontua() {
    this.pontuou = true;

    setTimeout(() => {
      this.pontuou = false;
    }, 1000);
  }
  
  aparece() {
    this.x = width;
  }

  exibe() {
    super.exibe();
    this.move();
  }

  passou() {
    if (this.pontuou) return false;

    const colisao = collideRectRect(this.x,
                                    this.y,
                                    this.largura,
                                    this.altura,
                                    pontuador.x1,
                                    pontuador.y1,
                                    pontuador.x2,
                                    pontuador.y2);

    return colisao;
  }
}