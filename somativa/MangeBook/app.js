const express = require('express');
const app = express();
const bookRoutes = require('./routes/book');

app.use(express.json());
app.get('/', (req, res) => res.send('Mange Book API está rodando'));
app.use('/api/livros', bookRoutes);

app.use((req, res) => res.status(404).json({ message: 'Rota não encontrada' }));

module.exports = app;
