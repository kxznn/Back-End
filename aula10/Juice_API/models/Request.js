const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    Suco: {type: mongoose.Schema.Types.ObjectId, ref: 'Juice', required: true},
    quantidade: { type: Number, required: true},
    status: {type: String, required: true, 
        enum: ['iniciado', 'em processamento', 'pronto'],
        default: 'iniciado'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Request', RequestSchema);
