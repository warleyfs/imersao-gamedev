class Jogo {
    constructor() {
        this.indiceMapa = 0;
        this.mapa = cartucho.mapa;
    }

    setup() {
        // Instanciando cenário
        cenario = new Cenario(imagemCenario, 3);
        
        // Instanciando as vidas
        vidas = new Vida(cartucho.configuracoes.qtdVidas);

        // Instanciando o placar
        placar = new Pontuacao();
        
        // Instanciando Personagem
        bruxinha = new Personagem(matrizBruxinha, imagemBruxinha, 10, 30, 135, 135, 220, 270);
        
        // Instanciando Inimigos
        const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width - 50, 30, 52, 52, 104, 104, 10);
        const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, 200, 100, 75, 200, 150, 10);
        const troll = new Inimigo(matrizTroll, imagemTroll, width, 0, 200, 200, 400, 400, 10);
        
        inimigos.push(gotinha);
        inimigos.push(gotinhaVoadora);
        inimigos.push(troll);

        // Reproduzir trilha sonora
        trilha.loop();
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            bruxinha.pula();
            somPulo.play();
        }
    }
    
    keyIsPressed(key) {
        if (key === 'ArrowRight') {
            bruxinha.x += 10;
        }

        if (key === 'ArrowLeft') {
            bruxinha.x -= 10;
        }
    }

    draw() {
        // Exibe o cenário
        cenario.exibe();
        
        // Exibe o placar
        placar.exibe();
        
        // Exibe as vidas
        vidas.exibe();

        // Exibe o personagem
        bruxinha.exibe();

        // Exibe os inimigos e trata a colisão
        const linhaAtual = this.mapa[this.indiceMapa];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;
        inimigo.exibe();

        
        if (inimigoVisivel) {
            
            this.indiceMapa++;
            
            inimigo.aparece();

            if (this.indiceMapa > this.mapa.length - 1) {
                this.indiceMapa = 0;
            }
        }

        if (bruxinha.estaColidindo(inimigo)) {
            if (vidas.estaViva()) {
                vidas.perdeVida();
                bruxinha.ficaInvencivel();
            } else {
                image(imagemGameOver, width / 2 - 200, height / 2);
                noLoop();
            }
        }

        if (inimigo.passou()) {
            placar.pontuar();
            inimigo.pontua();
        }
    }
}