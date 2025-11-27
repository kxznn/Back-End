require("dotenv").config();
const app = require("./app");
const { connectToDatabase } = require("./config/database");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

async function main() {
  try {
    await connectToDatabase(MONGO_URI);
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error("Falha ao iniciar:", error.message);
    process.exit(1);
  }
}

main();
