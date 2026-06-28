const DIMENSAO_VERTICAL = 5;
const DIMENSAO_HORIZONTAL = 5;
const CAPACIDADE_MAXIMA_GRID = DIMENSAO_VERTICAL * DIMENSAO_HORIZONTAL; 
const QUANTIDADE_MINAS = 5; 

// Constrói o mapa de jogo inserindo os itens secretos em quadrantes aleatórios
// Retorna uma matriz contendo as marcações textuais: DIAMANTE ou BOMBA
function gerarTabuleiro() {
  const blocosDisponiveis = Array(CAPACIDADE_MAXIMA_GRID).fill('DIAMANTE');

  // Mapeia coordenadas numéricas exclusivas para inserção dos objetos perigosos
  // Mantém a repetição até atingir a cota configurada
  const coordenadasAmeaca = new Set();
  while (coordenadasAmeaca.size < QUANTIDADE_MINAS) {
    coordenadasAmeaca.add(Math.floor(Math.random() * CAPACIDADE_MAXIMA_GRID));
  }

  coordenadasAmeaca.forEach((posicaoChave) => {
    blocosDisponiveis[posicaoChave] = 'BOMBA';
  });

  // Reorganiza o vetor unidimensional criando uma estrutura de dados de matriz 5x5
  const layoutTabuleiroPronto = [];
  for (let linhaAtual = 0; linhaAtual < DIMENSAO_VERTICAL; linhaAtual++) {
    layoutTabuleiroPronto.push(blocosDisponiveis.slice(linhaAtual * DIMENSAO_HORIZONTAL, linhaAtual * DIMENSAO_HORIZONTAL + DIMENSAO_HORIZONTAL));
  }

  return layoutTabuleiroPronto;
}

// Computa o retorno financeiro com base no saldo de entrada e pontuação do usuário
function calcularPremio(capitalDeAposta, quantidadeDeAcertos) {
  return parseFloat((capitalDeAposta * (1 + quantidadeDeAcertos * 0.33)).toFixed(2));
}

// Avalia de forma lógica se os índices de linha e coluna estão dentro das bordas da arena
function posicaoValida(indexLinha, indexColuna) {
  return (
    Number.isInteger(indexLinha) &&
    Number.isInteger(indexColuna) &&
    indexLinha >= 0 &&
    indexLinha < DIMENSAO_VERTICAL &&
    indexColuna >= 0 &&
    indexColuna < DIMENSAO_HORIZONTAL
  );
}

module.exports = { gerarTabuleiro, calcularPremio, posicaoValida };