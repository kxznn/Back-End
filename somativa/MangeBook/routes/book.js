const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// POST /livros - Adicionar livro
router.post("/", async (req, res) => {
  try {
    const { titulo, autor, ano, id } = req.body;

    if (!titulo || !autor || !id) {
      return res
        .status(400)
        .json({
          message: "Preencha os campos obrigatórios: titulo, autor, id",
        });
    }

    const book = new Book({ titulo, autor, ano, id });
    await book.save();
    return res.status(201).json(book);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "ID já cadastrado" });
    }
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// GET - Listar todos os livros
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// GET - Busca parcial por titulo
router.get("/buscar", async (req, res) => {
  try {
    const { titulo } = req.query;
    if (!titulo) {
      return res
        .status(400)
        .json({ message: 'O parâmetro "titulo" é obrigatório' });
    }

    const regex = new RegExp(titulo, "i");
    const books = await Book.find({ titulo: { $regex: regex } });

    return res.json(books);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// DELETE - Remover livro por ID
router.delete("/", async (req, res) => {
  try {
    const { id } = req.query; 

    if (!id) {
      return res.status(400).json({ message: "Parâmetro 'id' é obrigatório" });
    }

    const result = await Book.findOneAndDelete({ id });

    if (!result) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    return res.status(200).json({ message: "Livro deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao deletar livro",
      error: error.message,
    });
  }
});

module.exports = router;
