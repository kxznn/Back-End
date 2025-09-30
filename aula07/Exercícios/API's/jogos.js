const express = require('express');
const app = express();
app.use(express.json());

class Cliente {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Jogo {
    constructor(id, titulo, plataforma) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma ; // Jogos de PS5 e/ou Nintendo Switch
    }
}

let clientes = [];
let jogos = [];

app.get("/", (req, res) => {
    res.send('Bem-vindo à API Games');
});

app.post('/cadastrar_clientes', (req, res) => {
    const { nome, email } = req.query;

    if (!nome || !email) {
        return res.status(400).json({ erro: 'Preencher nome e email obrigatórios.' });
    }

    const id = clientes.length + 1;
    const novoCliente = new Cliente(id, nome, email);
    clientes.push(novoCliente);

    res.status(201).json({ mensagem: 'Cadastrado com sucesso!', cliente: novoCliente });
});

app.get('/exibe_clientes', (req, res) => {
  res.json(clientes);
});


app.delete('/deletar_cliente/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = clientes.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Cliente não encontrado.' });
  }

  clientes.splice(index, 1);
  res.json({ mensagem: `Cliente com ID ${id} foi deletado com sucesso.` });
});

app.post("/cadastrar_jogos", (req, res) => {
  const { titulo, plataforma } = req.query;

  const plataformasValidas = ['PS5', 'Nintendo Switch'];
  if (!titulo || !plataforma) {
    return res.status(400).json({ erro: 'Inserir titulo e plataforma necessários.' });
  }

  if (!plataformasValidas.includes(plataforma)) {
    return res.status(400).json({ erro: 'Plataforma inválida. Use "PS5" ou "Nintendo Switch".' });
  }

  const id = jogos.length + 1;
  const novoJogo = new Jogo(id, titulo, plataforma);
  jogos.push(novoJogo);

  res.status(201).json({ mensagem: 'Jogo cadastrado com sucesso!', jogo: novoJogo });
});

app.get('/exibe_jogos', (req, res) => {
  res.json(jogos);
});

app.delete('/deletar_jogo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = jogos.findIndex(j => j.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Jogo não encontrado.' });
  }

  jogos.splice(index, 1);
  res.json({ mensagem: `Jogo com ID ${id} deletado com sucesso.` });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});