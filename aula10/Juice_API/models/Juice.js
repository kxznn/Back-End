const mongoose = require('mongoose');

const JuiceSchema = new mongoose.Schema({
    Sabor: {type: String, required: true},
    Quantidade: {type: Number, required: true},
    Estoque: { type: Number, required: true, default: 0}
});

module.exports = mongoose.model('Juice', JuiceSchema);