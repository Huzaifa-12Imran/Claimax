require('dotenv').config();
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = require('./src/app');

// Use a separate log file
const LOG_FILE = 'debug.log';

// Debugging: Log EVERY request before any other middleware
const debugMiddleware = (req, res, next) => {
  const logMsg = `[${new Date().toISOString()}] ${req.method} ${req.url} - Headers: ${JSON.stringify(req.headers)} - Body: ${JSON.stringify(req.body)}\n`;
  console.log(logMsg);
  fs.appendFileSync(LOG_FILE, logMsg);
  next();
};

// We need to inject this middleware at the TOP of the app
// Since 'app' is already configured in src/app, we might need to recreate it here
// or just use it as is if it doesn't have many routes yet.

const debugApp = express();
debugApp.use(cors());
debugApp.use(express.json());
debugApp.use(debugMiddleware);

// Proxy to the real app logic but with our debug wrapper
debugApp.use(app);

debugApp.listen(5002, () => {
  console.log(`[DEBUG] Debug Server running on port 5002`);
});
