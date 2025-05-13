import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routes/api.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Middlewares para optimización
app.use(express.static(path.join(__dirname, '../../public'), {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, path) => {
        if (path.endsWith('.webp')) {
            res.setHeader('Content-Type', 'image/webp');
        }
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compresión
import compression from 'compression';
app.use(compression());

// Rutas API
app.use('/api', apiRouter);

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Optimización para HTTP/2
app.enable('trust proxy');