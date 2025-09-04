// importa as bibliotecas express e axios
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// inicializa a aplicação do express
const app = express();
const port = 3000;

app.use(express.json)
const user = []

app.use(cors());
const rick_morty = 'https://rickandmortyapi.com/api';

app.get ('/' , (req, res) => {
    res.send('Bem vinda a minha API do Rick & Morty :)')
});

app.get('/personagens', async (req, res)=> {
    try {
        const response = await axios.get(`${rick_morty}/character`);
        res.json(response.data.results);
    }   catch {
        res.status(500).json({error: 'Erro ao buscar personagem'})
    }
});

app.get('/personagem/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${rick_morty}/character/${id}`);
        res.json(response.data);
    }   catch (err) {
        if( err.response?.status == 404 ) {
            return res.status(404).json({ error: 'Cidade não encontrada' });
        }
        res.status(500).json({ error: 'Personagem não encontrado na sua busca' });
    }

});

app.get('multiplospersogens/:ids', async (req, res) => {
    const { ids } = req.params;
    try {
        const response = await axios.get(`${rick_morty}/character/${ids}`);
        res.json(response.data);
    }   catch (err) {
        res.status(500).json({ error: 'Personagens não encontrados na sua busca' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
