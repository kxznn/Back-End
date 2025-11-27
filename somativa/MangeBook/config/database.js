const mongoose = require('mongoose');

async function connectToDatabase(uri) {
    try {
        await mongoose.connect(uri, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB.');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };