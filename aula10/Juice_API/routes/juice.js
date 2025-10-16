const express = require('express');
const router = express.Router();
const Juice = require('../models/Juice');
const Request = require('../models/Request');

// ROTA DO SUCOS (PRODUTO)
router.post('/cadastro_suco', async (req, res) => {
    const { Sabor, Quantidade, Estoque } = req.body;
    try {
        const newJuice = new Juice({ Sabor, Quantidade, Estoque });
        await newJuice.save();
        res.status(201).json({ message: 'Suco cadastrado com sucesso!', Suco: newJuice });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o Suco', error })
    }
});

router.get('/cadastro-suco', async (req, res) => {
    try {
        const juices = await Juice.find({ estoque: { $gt: 0 } });
        res.status(200).json(juices);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar Suco', error });
    }
});
// ROTA DOS PEDIDOS 

router.post('/pedido', async (req, res) => {
    const { Suco, quantidade } = req.body;
    try {
        const juice = await Juice.findById(sucoId);
        if (!juice) {
            return res.status(404).json({ message: 'Suco não encontrado' });
        }
        if (!juice.Estoque < quantidade) {
            return res.status(400).json({ message: ' Estoque insuficiente', estoque_disponivel: juice.Estoque });
        }
        juice.Estoque -= quantidade;
        await juice.save();


        const newRequest = new Request({ Suco: sucoId, quantidade: quantidade });
        await newRequest.save();
        res.status(201).json({ message: 'Pedido realizado com sucesso', request: newRequest });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o pedido', error });
    }
});


router.get('/lista_pedidos', async (req, res) => {
    try {
        const ActiveRequest = await Request.find({
            status: { $in: ['iniciado', 'em andamento'] }
        }).populate('suco');
        res.status(200).json(ActiveRequest);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar pedido', error });
    }
});

router.put('/ordem_producao/:id', async (req, res) => {
    const { novoStatus } = req.body;
    const allowedStatus = ['em processamento', 'pronto'];
    if (!allowedStatus.includes(novoStatus)) {
        return res.status(400).json({ message: "Status inválido. Use 'em processamento' ou 'pronto'." });
    }

    try {
        const updatedOrder = await Request.findByIdAndUpdate(
            req.params.id,
            { status: novoStatus },
            { new: true } 
        ).populate('suco');

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }

        res.status(200).json({ message: 'Status do pedido atualizado!', request: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar pedido', error });
    }
});

module.exports = router;