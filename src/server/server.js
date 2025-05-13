import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createLogger, format, transports } from 'winston';

// Configuración de rutas ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logger (simplificado)
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
  ),
  transports: [new transports.Console()]
});

// Servidor Express
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

// Ruta de ejemplo
app.get('/api/data', (req, res) => {
  logger.info('Acceso a /api/data');
  res.json({ status: 'ok', message: 'Datos desde el backend' });
});

// Iniciar servidor
app.listen(PORT, () => {
  logger.info(`Servidor listo en http://localhost:${PORT}`);
});