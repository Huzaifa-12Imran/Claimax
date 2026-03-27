'use strict';

const { body, validationResult } = require('express-validator');

const rules = [
  body('name')
    .notEmpty().withMessage('Full name is required.')
    .trim()
    .escape()
    .isLength({ max: 100 }).withMessage('Name must be under 100 characters.'),

  body('practice')
    .notEmpty().withMessage('Practice name is required.')
    .trim()
    .escape()
    .isLength({ max: 150 }).withMessage('Practice name must be under 150 characters.'),

  body('email')
    .notEmpty().withMessage('Email address is required.')
    .isEmail().withMessage('Please enter a valid email address.')
    .normalizeEmail(),

  body('phone')
    .notEmpty().withMessage('Phone number is required.')
    .matches(/^[0-9\s\-\+\(\)]{10,20}$/).withMessage('Please enter a valid phone number (10–20 digits).'),

  body('revenue')
    .notEmpty().withMessage('Monthly revenue range is required.')
    .isIn(['<50K', '50K-150K', '150K-500K', '500K+']).withMessage('Please select a valid revenue range.'),

  body('message')
    .notEmpty().withMessage('Message is required.')
    .trim()
    .escape()
    .isLength({ max: 2000 }).withMessage('Message must be under 2000 characters.'),
];

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const fieldErrors = {};
    for (const err of errors.array()) {
      if (!fieldErrors[err.path]) fieldErrors[err.path] = err.msg;
    }
    return res.status(422).json({ errors: fieldErrors });
  }
  next();
}

module.exports = [...rules, validator];
