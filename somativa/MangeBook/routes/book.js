const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

router.post('/', async (req, res) => {
    try {
        const { title, autor, ano, isbn } = req.body;
        if (!title || !autor || !ano || !isbn) {
            return res.status(400).json({ message: ' Preencha todos os campos obrigatórios !' })
    }
    const book = new Book({ title, autor, ano, isbn });
    await book.save();
    res.status(201).json(book);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: ' Livro com ISBN já existente' })
        }
        return res.status(500).json({ message: 'Erro ao criar o livro', error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const { titulo } = req.query;
        if (!titulo) {
            return res.status(400)
        }
    }
}