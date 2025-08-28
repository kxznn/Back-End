// Codigo API simples em Node.js

const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

// Armazena os produtos na memoria
let produtos = [];

app.get('/', (req, res) => {
    res.send('Sistema da Planta Smart 4.0');
});

// Rota de cadastro de produtos 
app.post('/cadastro', (req, res) => {
    const { name, qntde } = req.body;
    if (!name || qntde === undefined) {
        return res.status(400).json({ mensagem: 'Nome e quantidade do produto são necessários!' });
    }
    const newProduct = { name, qntde };
    produtos.push(newProduct); 

    res.status(201).json({
        mensagem: 'Produto cadastrado com sucesso.',
        produto: newProduct
    });
});

// Rota para listar os produtos
app.get('/products', (req, res) => {
    res.json({ produtos }); 
});

app.listen(port, () => {
    console.log(`Servidor está sendo rodado na porta ${port}`);
});
