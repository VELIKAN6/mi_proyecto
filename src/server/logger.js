// src/server/logger.js
const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
  level: 'info', // Nivel mínimo de logs (error, warn, info, debug)
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    new transports.Console(), // Logs en consola
    new transports.File({ filename: 'logs/server.log' }) // Logs en archivo
  ]
});