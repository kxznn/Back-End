// Codigo API simples em Node.js

const express = require ('express');
const app = express();
const port = 3003;


app.use(express.json());
app.get('/', (req,res) => {
    res.send('Seja Bem-vindo a minha API :) ');
});
app.listen(port, () => {
    console.log(`Servidor esta sendo rodado na porta ${port}`);
})