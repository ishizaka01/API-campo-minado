const servicoAutenticacao = require('../services/authService');

async function register(req, res) {
  try {
    const { nome, email, dataNascimento, senha, confirmacaoSenha } = req.body;
    const novoUsuario = await servicoAutenticacao.registrar(nome, email, dataNascimento, senha, confirmacaoSenha);
    return res.status(201).json(novoUsuario);
  } catch (erroSistema) {
    return res.status(erroSistema.status || 500).json({ message: erroSistema.message || 'Erro interno do servidor.' });
  }
}

async function login(req, res) {
  try {
    const { email, senha } = req.body;
    const informacoesLogin = await servicoAutenticacao.login(email, senha);
    return res.status(200).json(informacoesLogin);
  } catch (erroSistema) {
    return res.status(erroSistema.status || 500).json({ message: erroSistema.message || 'Erro interno do servidor.' });
  }
}

async function resetPassword(req, res) {
  try {
    const { id, novaSenha } = req.body;
    const respostaRedefinicao = await servicoAutenticacao.redefinirSenha(id, novaSenha);
    return res.status(200).json(respostaRedefinicao);
  } catch (erroSistema) {
    return res.status(erroSistema.status || 500).json({ message: erroSistema.message || 'Erro interno do servidor.' });
  }
}

module.exports = { register, login, resetPassword };