class Jogo {
    constructor() {
        this.indiceMapa = 0;
        this.mapa = cartucho.mapa;
    }

    setup() {
        // Instanciando cenário
        ceu = new Cenario(imagemPantanoCeu, 1);
        arvores4 = new Cenario(imagemPantanoArvores4, 2);
        arvores3 = new Cenario(imagemPantanoArvores3, 3);
        arvores2 = new Cenario(imagemPantanoArvores2, 4);
        arvores1 = new Cenario(imagemPantanoArvores1, 5);
        agua = new Cenario(imagemPantanoAgua, 6);
        chao = new Cenario(imagemPantanoChao, 7);

        // Instanciando as vidas
        vidas = new Vida(cartucho.configuracoes.qtdVidas);

        botaoJovemNerd = new Botao('', 
                                    10, 
                                    vidas.altura + (vidas.margem * 2), 
                                    'botao-avatar-jovemnerd hidden', 
                                    (botao) => {
                                        personagemAtual = jovemNerd;
                                    });
        botaoAzaghal = new Botao('', 
                                    75, 
                                    vidas.altura + (vidas.margem * 2), 
                                    'botao-avatar-azaghal hidden', 
                                    (botao) => {
                                        personagemAtual = azaghal;
                                    });

        // Instanciando o placar
        placar = new Pontuacao();
        pontuador = new Pontuador();
        
        // Instanciando Personagem
        bruxinha = new Personagem(matrizBruxinha, imagemBruxinha, imagemBruxinha, 10, 30, 135, 135, 220, 270);
        jovemNerd = new Personagem(matrizJovemNerd, imagemJovemNerd, imagemJovemNerdDano, 10, 30, 74, 129, 74, 129);
        azaghal = new Personagem(matrizAzaghal, imagemAzaghal, imagemAzaghalDano, 10, 30, 90, 107, 90, 107);
        artimus = new Personagem(matrizArtimus, imagemArtimus, imagemArtimus, 10, 30, 125, 117, 256, 235);
        
        personagemAtual = jovemNerd;

        // Instanciando Inimigos
        const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width - 50, 30, 52, 52, 104, 104, 10);
        const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, 200, 100, 75, 200, 150, 10);
        const troll = new Inimigo(matrizTroll, imagemTroll, width, 0, 200, 200, 400, 400, 10);
        const beholderAndando = new Inimigo(matrizBeholderAndando, imagemBeholderAndando, width, 75, 134, 137, 134, 137, 10);
        
        inimigos.push(gotinha);
        inimigos.push(gotinhaVoadora);
        inimigos.push(troll);
        inimigos.push(beholderAndando);

        // Reproduzir trilha sonora
        trilha.loop();
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            somPulo.play();

            bruxinha.pula();
            jovemNerd.pula();
            azaghal.pula();
            artimus.pula();
        }
    }
    
    keyIsPressed(key) {
        if (key === 'ArrowRight') {
            bruxinha.x += 10;
            jovemNerd.x += 10;
            azaghal.x += 10;
            artimus.x += 10;
        }

        if (key === 'ArrowLeft') {
            bruxinha.x -= 10;
            jovemNerd.x -= 10;
            azaghal.x -= 10;
            artimus.x -= 10;
        }
    }

    draw() {
        // Exibe o cenário
        ceu.exibe();
        arvores4.exibe();
        arvores3.exibe();
        arvores2.exibe();
        arvores1.exibe();
        agua.exibe();
        chao.exibe();
        
        // Exibe o placar
        placar.exibe();
        
        // Exibe botões de seleção do personagem
        botaoJovemNerd.exibir();
        botaoAzaghal.exibir();

        // Exibe as vidas
        vidas.exibe();

        // Exibe o personagem
        personagemAtual.exibe();

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

        if (personagemAtual.estaColidindo(inimigo)) {
            if (vidas.estaViva()) {
                vidas.perdeVida();
                personagemAtual.ficaInvencivel();
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