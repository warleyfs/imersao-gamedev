let imagemCenario, imagemBruxinha, imagemGotinha, imagemGotinhaVoadora, imagemTroll;
let imagemJovemNerd, imagemJovemNerdDano, imagemAzaghal, imagemAzaghalDano, imagemBeholderMergulho, imagemBeholderAndando;
let imagemArtimus, imagemAvatarJovemNerd, imagemAvatarAzaghal;
let imagemPantanoChao, imagemPantanoCeu, imagemPantanoAgua, imagemPantanoArvores1;
let imagemPantanoArvores2, imagemPantanoArvores3, imagemPantanoArvores4; 
let imagemTelaInicial, imagemGameOver, imagemVida;
let fonteTelaInicial;
let botaoInicio;
let ceu, arvores4, arvores3, arvores2, arvores1, agua, chao;
let bruxinha, jovemNerd, azaghal, artimus, trilha, somPulo, placar, pontuador, vidas;
let personagemAtual, botaoJovemNerd, botaoAzaghal;
let jogo, telaInicial;
let cenaAtual = 'telaInicial';
let cenas = [];
let cartucho;

const inimigos = [];
const matrizBruxinha = criarMatrizBruxinha(4, 4, 270, 220);
const matrizGotinha = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];
const matrizGotinhaVoadora = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
const matrizTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizJovemNerd = [
  [0,0], [74,0], [148,0], [222,0], [296,0], [370,0]
];
const matrizAzaghal = [
  [0,0], [90,0], [180,0], [270,0], [360,0], [450,0]
];
const matrizBeholderAndando = [
  [0, 0], 
  [134, 0], 
  [268, 0], 
  [402, 0], 
  [536, 0], 
  [0, 137], 
  [134, 137], 
  [268, 137], 
  [402, 137], 
  [536, 137]
];
const matrizArtimus = [
  [0,0], [256,0], [512,0], [768,0], 
  [0,235], [256,235], [512,235], [768,235], 
];

function criarMatrizBruxinha(qtdLinhas, qtdColunas, altura, largura) {
    let matriz = [];
    
    //console.log(`qtdLinhas: ${qtdLinhas} | qtdColunas: ${qtdColunas} | altura: ${altura} | largura: ${largura}`);
    
    for (let y = 0; y < qtdColunas; y++) {
      for (let x = 0; x < qtdLinhas; x++) {
        let frame = [x * largura, y * altura];
        //console.log(`X: ${frame[0]} | Y: ${frame[1]}`);
        matriz.push(frame);
      }
    }
  
    return matriz;
  }
  