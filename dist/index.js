import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ip from 'ip';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../public')));
app.get('/ping', (req, res) => {
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://${ip.address()}:${PORT}`);
});
