class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulo = -30;
    this.qtdPulos = 0;
    this.maxPulos = 2;
    this.invencivel = false;
  }

  pula() {
    this.qtdPulos++;

    if (this.qtdPulos <= this.maxPulos) {
      this.velocidadeDoPulo = this.pulo;
    }

  }

  exibe() {
    super.exibe();
    this.aplicaGravidade();
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.qtdPulos = 0;
    }

  }

  ficaInvencivel() {
    this.invencivel = true;

    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }

  estaColidindo(inimigo) {

    if (this.invencivel) return false;

    const precisao = 0.7;
    
    const colisao = collideRectRect(this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao);

    return colisao;
  }

}