    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');

    const app = express();
    const PORT = 3000;
    app.use(cors());
    app.use(express.json());

    mongoose.connect('mongodb://localhost:27017/DBlibrary',  {
        // userewUrlParser: true,
        // useUnifiedTopology: true,
    })


    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

    const booksRoutes = require('./routes/books');
    app.use('/api/books', booksRoutes);

    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em  http://localhost:${PORT}`);
    });