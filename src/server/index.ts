import express from "express";
import { fileURLToPath } from "url";  // Importa o módulo de utilidades de URL
import path from "path";

// Obtém o diretório atual de forma compatível com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
let port = 3000;

app.use('/build', express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    console.log("Página carregada");
});

app.listen(port, () => {
    console.log("App listening on port: ", port);
});
