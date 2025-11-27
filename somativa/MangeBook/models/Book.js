const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
    id: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);