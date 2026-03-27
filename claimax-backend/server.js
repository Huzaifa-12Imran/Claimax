'use strict';

require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  const mode = process.env.NODE_ENV || 'development';
  process.stdout.write(`[Claimax] Server running on port ${PORT} (${mode})\n`);
});

process.on('unhandledRejection', (reason) => {
  process.stderr.write(`[Claimax] Unhandled rejection: ${reason}\n`);
  server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
  process.stdout.write('[Claimax] SIGTERM received. Shutting down gracefully.\n');
  server.close(() => process.exit(0));
});
