'use strict';

const express = require('express');
const rateLimiter = require('../middleware/rateLimiter');
const validator = require('../middleware/validator');
const { sendContactEmails } = require('../services/emailService');

const router = express.Router();

router.post('/contact', rateLimiter, ...validator, async (req, res, next) => {
  try {
    const { name, practice, email, phone, revenue, message } = req.body;
    await sendContactEmails({ name, practice, email, phone, revenue, message });
    res.status(200).json({
      success: true,
      message: `Thank you, ${name}! We've received your request and will respond within 1 business day.`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
