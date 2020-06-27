class Vida {
    constructor (qtdVidas) {
        this.qtdVidas = qtdVidas;
        this._vidasRestantes = this.qtdVidas;
        this.largura = 50;
        this.altura = 50;
        this.margem = 10;
        this.y = 10;
    }

    _vidasRestantes = 0;

    estaViva() { 
        return this._vidasRestantes > 1; 
    }

    exibe() {
        for (let vida = 0; vida < this._vidasRestantes ; vida++) {
            image(imagemVida, this.margem + (vida * (this.largura + this.margem)), this.y, this.largura, this.altura);
        }
    }

    perdeVida() {
        this._vidasRestantes--;
        this.exibe();
    }

    ganhaVida() {
        if (this._vidasRestantes < this.qtdVidas) {
            this._vidasRestantes++;
            this.exibe();
        }
    }

    nasce() {
        this._vidasRestantes = this.qtdVidas;
        this.exibe();
    }
}