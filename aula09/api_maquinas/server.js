const express = require('express');
const mongoose = require('mongoose');

const usuarioRoutes = require('./routes/usuario');
const maquinaRoutes = require('./routes/maquina');

const app = express();
const PORT = 4000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log(' ✔ Conectado ao MongoDB'))
.catch(err => console.err('❌ Erro ao conectar:', err));

app.use('/api/usuario', usuarioRoutes);
app.use('/api/maquina', maquinaRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em  http://localhost:${PORT}`);
});