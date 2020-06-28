class TelaInicial {

    constructor() {
        this.botaoInicio = new Botao('Iniciar', 
                                    width / 2, 
                                    height / 7 * 5, 
                                    'botao-tela-inicial', 
                                    (botao) => {
                                        botao.remove();
                                        cenaAtual = 'jogo';
                                    }, 
                                    true);
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        
        textSize(50);
        text('O Duque, a Rosa e o', width / 2, height / 3);
        textSize(150);
        text('Beholder', width / 2, height / 5 * 3);
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
    }
}