'use strict';

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  const message =
    process.env.NODE_ENV === 'production' && status === 500
      ? 'An internal server error occurred. Please try again later.'
      : err.message || 'Internal Server Error';

  console.error('[Claimax Solutions API Error]', err);
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
