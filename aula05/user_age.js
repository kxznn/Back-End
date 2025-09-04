// importa as bibliotecas express e axios
const express = require('express');
const axios = require('axios');

// inicializa a aplicação do express
const app = express();
const port = 3000;

app.use(express.json)
const user = []

app.post('/name_age', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age == undefined) {
        return res.status(400).json({ error: 'Obrigatótio informar nome e idade ' });
    }
    const newname = {
        id: user.length + 1,
        name,
        age
    };

    user.push(newname);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', usuario: newname });
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(user);
});

app.get('/', (req, res) => {
    res.send('Informe um nome e uma idade');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
