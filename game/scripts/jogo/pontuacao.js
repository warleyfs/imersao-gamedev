class Pontuacao {
    constructor() {
      this.pontos = 0;
    }
    
    exibe() {
      textSize(50);
      textAlign(RIGHT);
      fill('#FFF');
      text(parseInt(this.pontos), width - 10, 50);
    }
    
    pontuar() {
      this.pontos++;
    }
  }