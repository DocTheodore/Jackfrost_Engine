import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ip from 'ip';
import { createServer } from 'http';
import { Server } from 'socket.io';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = createServer(app); // criar servidor HTTP para o socket.io
const io = new Server(server); // inicializar socket.io
const PORT = process.env.PORT || 3000;
app.use('/dist', express.static(path.join(__dirname, '../../dist')));
app.use(express.static(path.join(__dirname, '../../public')));
app.get('/ping', (req, res) => {
    res.send('pong');
});
// Configurar evento de conexão do socket
io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});
// Usar o `server.listen` em vez de `app.listen`
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://${ip.address()}:${PORT}`);
});
